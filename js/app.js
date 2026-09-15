/**
 * Main Application Orchestrator for Case #070411
 * Subject: Nguyễn Minh Ánh
 */

class DossierApp {
  constructor() {
    this.currentLang = 'vi';
    this.audio = window.detectiveAudio || null;
    this.magnifier = window.magnifyingGlassInspector || null;
    this.deductionChain = null;
    this.canvasThreads = null;
    this.activeModal = null;
    this.isUnsealed = false;

    document.addEventListener('DOMContentLoaded', () => this.init());
  }

  init() {
    this.audio = window.detectiveAudio || null;
    this.magnifier = window.magnifyingGlassInspector || null;

    this.applyTranslations(this.currentLang);
    this.renderAllData();
    this.setupEventListeners();
    this.setupScrollSpy();
    this.initComponents();
    this.setupImageLightbox();
  }

  initComponents() {
    // Deduction Chain
    if (typeof DeductionChain !== 'undefined') {
      this.deductionChain = new DeductionChain('deduction-interactive-container');
    }

    // Evidence canvas thread
    if (typeof EvidenceThreadCanvas !== 'undefined') {
      this.canvasThreads = new EvidenceThreadCanvas('evidence-canvas-threads', 'evidence-board-container');
    }
  }

  setupEventListeners() {
    // Unseal Case file button in Hero Desk
    const unsealBtn = document.getElementById('unseal-case-btn');
    if (unsealBtn) {
      unsealBtn.addEventListener('click', () => this.unsealCase());
    }

    const beginBtn = document.getElementById('begin-investigation-btn');
    if (beginBtn) {
      beginBtn.addEventListener('click', () => this.unsealCase());
    }
    // Back to Hero buttons
    const backBtn = document.getElementById('back-to-hero-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => this.returnToHero());
    }

    const footerBackBtn = document.getElementById('footer-back-btn');
    if (footerBackBtn) {
      footerBackBtn.addEventListener('click', () => this.returnToHero());
    }
    // Audio Toggle
    const audioBtn = document.getElementById('toggle-sound-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (this.audio && typeof this.audio.toggleMute === 'function') {
          const isMuted = this.audio.toggleMute();
          audioBtn.classList.toggle('is-muted', isMuted);
          audioBtn.setAttribute('title', isMuted ? 'Unmute Sound' : 'Mute Sound');
        }
      });
    }

    // Magnifier Toggle
    const lensBtn = document.getElementById('toggle-lens-btn');
    if (lensBtn) {
      lensBtn.addEventListener('click', () => {
        if (this.magnifier && typeof this.magnifier.toggle === 'function') {
          this.magnifier.toggle();
        }
      });
    }

    // Language Toggle
    const langBtn = document.getElementById('toggle-lang-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        this.setLanguage(this.currentLang === 'vi' ? 'en' : 'vi');
      });
    }

    // Printable Dossier Summary Modal
    const printBtn = document.getElementById('open-summary-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => this.openSummaryModal());
    }

    // Copy Email to clipboard
    const copyBtns = document.querySelectorAll('.copy-email-action');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.copyEmail();
      });
    });

    // Close Modal button and overlay
    const modalOverlay = document.getElementById('dossier-modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.closest('.modal-close-btn')) {
          this.closeModal();
        }
      });
    }

    // Combined Escape key handler: prioritizes closing lightbox first if open
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.isLightboxOpen()) {
          this.closeLightbox();
        } else {
          this.closeModal();
        }
      }
    });
  }

  /**
   * LIGHTBOX SYSTEM
   * Fullscreen inspected view for portrait and proof images with event delegation.
   */
  setupImageLightbox() {
    const overlay = document.getElementById('image-lightbox-overlay');
    if (!overlay) return;

    const closeBtn = overlay.querySelector('.lightbox-close-btn');

    // Event Delegation: Listen on document so any dynamically created proof images in modals are automatically supported
    document.addEventListener('click', (e) => {
      // Do not trigger lightbox if user clicked the close button or overlay itself
      if (e.target.closest('.lightbox-close-btn') || e.target === overlay) {
        return;
      }

      // Check if clicked element or its container is a target image
      let targetImg = null;

      if (e.target.matches('img.modal-proof-img, img.desk-portrait-img, img.lightbox-trigger')) {
        targetImg = e.target;
      } else if (e.target.closest('.modal-proof-polaroid-frame')) {
        targetImg = e.target.closest('.modal-proof-polaroid-frame').querySelector('img.modal-proof-img');
      } else if (e.target.closest('.modal-proof-frame')) {
        targetImg = e.target.closest('.modal-proof-frame').querySelector('img');
      } else if (e.target.closest('.desk-portrait-frame')) {
        targetImg = e.target.closest('.desk-portrait-frame').querySelector('img.desk-portrait-img');
      } else if (e.target.closest('.subject-portrait-polaroid')) {
        targetImg = e.target.closest('.subject-portrait-polaroid').querySelector('img');
      } else {
        targetImg = e.target.closest('img.modal-proof-img, .desk-portrait-frame img, .modal-proof-polaroid-frame img, img.lightbox-trigger');
      }

      if (targetImg) {
        // Confirm image is visible and has a non-empty source
        const src = targetImg.currentSrc || targetImg.getAttribute('src');
        const isHidden = targetImg.style.display === 'none' || targetImg.offsetParent === null;

        if (src && !isHidden) {
          e.preventDefault();
          e.stopPropagation();
          const alt = targetImg.getAttribute('alt') || targetImg.alt || '';
          this.openLightbox(src, alt);
        }
      }
    });

    // Close on click close button
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.closeLightbox();
      });
    }

    // Close on click outside the image (on overlay background only)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.closeLightbox();
      }
    });
  }

  openLightbox(src, alt = '') {
    const overlay = document.getElementById('image-lightbox-overlay');
    const fullImg = document.getElementById('lightbox-full-image');
    if (!overlay || !fullImg) return;

    fullImg.src = src;
    fullImg.alt = alt;
    overlay.classList.add('active');

    if (this.audio && typeof this.audio.playPaperRustle === 'function') {
      this.audio.playPaperRustle();
    }
  }

  closeLightbox() {
    const overlay = document.getElementById('image-lightbox-overlay');
    const fullImg = document.getElementById('lightbox-full-image');
    if (!overlay) return;

    overlay.classList.remove('active');
    if (fullImg) {
      // Clear image source after transition to avoid flicker
      setTimeout(() => {
        if (!this.isLightboxOpen()) {
          fullImg.src = '';
          fullImg.alt = '';
        }
      }, 250);
    }

    if (this.audio && typeof this.audio.playPaperRustle === 'function') {
      this.audio.playPaperRustle();
    }
  }

  isLightboxOpen() {
    const overlay = document.getElementById('image-lightbox-overlay');
    return Boolean(overlay && overlay.classList.contains('active'));
  }

  unsealCase() {
    if (this.isUnsealed) return;
    this.isUnsealed = true;

    if (this.audio && typeof this.audio.playWaxSnap === 'function') this.audio.playWaxSnap();

    const deskScene = document.getElementById('hero-desk-prologue');
    const waxSeal = document.getElementById('desk-wax-seal');
    const mainDossier = document.getElementById('main-investigation-dossier');
    const navBar = document.getElementById('detective-hud-dock');

    if (waxSeal) waxSeal.classList.add('wax-cracked');

    setTimeout(() => {
      if (deskScene) deskScene.classList.add('desk-folded');
      if (mainDossier) mainDossier.classList.remove('dossier-concealed');
      if (navBar) navBar.classList.add('hud-visible');
      document.body.classList.remove('dossier-sealed');

      if (this.audio && typeof this.audio.startAmbient === 'function') {
        this.audio.startAmbient();
      }

      window.scrollTo(0, 0);

      if (this.canvasThreads) {
        setTimeout(() => {
          this.canvasThreads.updateSize();
          this.canvasThreads.draw();
        }, 600);
      }
    }, 450);
  }

  returnToHero() {
    if (!this.isUnsealed) return;
    this.isUnsealed = false;

    const deskScene = document.getElementById('hero-desk-prologue');
    const waxSeal = document.getElementById('desk-wax-seal');
    const mainDossier = document.getElementById('main-investigation-dossier');
    const navBar = document.getElementById('detective-hud-dock');

    if (mainDossier) mainDossier.classList.add('dossier-concealed');
    if (deskScene) deskScene.classList.remove('desk-folded');
    if (waxSeal) waxSeal.classList.remove('wax-cracked');
    if (navBar) navBar.classList.remove('hud-visible');
    document.body.classList.add('dossier-sealed');
    
    if (this.audio && typeof this.audio.playPaperRustle === 'function') this.audio.playPaperRustle();

    if (this.audio && typeof this.audio.stopAmbient === 'function') {
      this.audio.stopAmbient();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  applyTranslations(lang) {
    const localizedNodes = document.querySelectorAll(
      '[data-i18n-vi][data-i18n-en]'
    );

    localizedNodes.forEach((node) => {
      const translationKey = lang === 'vi' ? 'i18nVi' : 'i18nEn';
      if (node.dataset[translationKey] !== undefined) {
        node.textContent = node.dataset[translationKey];
      }
    });

    document.documentElement.lang = lang;
    document.title = lang === 'vi' 
      ? 'CASE #070411 // NGUYỄN MINH ÁNH — Forensic Portfolio & Investigation File'
      : 'CASE #070411 // NGUYEN MINH ANH — Forensic Portfolio & Investigation File';
  }

  setLanguage(lang) {
    this.currentLang = lang;
    const langBtn = document.getElementById('toggle-lang-btn');
    if (langBtn) {
      langBtn.innerHTML = `<span>LANG: <strong>${lang.toUpperCase()}</strong></span>`;
    }

    this.applyTranslations(lang);

    this.renderAllData();
    if (this.deductionChain && typeof this.deductionChain.setLanguage === 'function') {
      this.deductionChain.setLanguage(lang);
    }
    if (this.canvasThreads && typeof this.canvasThreads.draw === 'function') {
      this.canvasThreads.draw();
    }
    if (this.audio && typeof this.audio.playTypewriter === 'function') this.audio.playTypewriter();
  }

  renderAllData() {
    const data = window.DOSSIER_DATA;
    const lang = this.currentLang;

    // Render Core Values
    const coreValuesContainer = document.getElementById('core-values-grid');
    if (coreValuesContainer) {
      coreValuesContainer.innerHTML = data.subject.coreValues.map(v => `
        <div class="trait-record-card">
          <div class="trait-header">
            <span class="trait-stamp">${v.badge}</span>
            <span class="trait-pin-icon"></span>
          </div>
          <h4 class="trait-title">${v.title[lang]}</h4>
          <p class="trait-desc">${v.desc[lang]}</p>
        </div>
      `).join('');
    }

    // Render Education records in Section 1
    const eduContainer = document.getElementById('education-records-list');
    if (eduContainer) {
      eduContainer.innerHTML = data.subject.education.map(e => `
        <div class="edu-record-row">
          <div class="edu-year-col">${e.period}</div>
          <div class="edu-info-col">
            <div class="edu-school-name">${e.school[lang]}</div>
            <div class="edu-major-badge">${e.major[lang]} — <span class="edu-status">${e.status[lang]}</span></div>
            <div class="edu-note">${e.note[lang]}</div>
          </div>
        </div>
      `).join('');
    }

    // Render Evidence Cards
    const evidenceGrid = document.getElementById('evidence-cards-grid');
    if (evidenceGrid) {
      evidenceGrid.innerHTML = data.evidence.map(ev => {
        const metricVal = typeof ev.metric === 'object' && ev.metric !== null ? (ev.metric[lang] || ev.metric.vi) : ev.metric;
        const secMetricVal = typeof ev.secondaryMetric === 'object' && ev.secondaryMetric !== null ? (ev.secondaryMetric[lang] || ev.secondaryMetric.vi) : ev.secondaryMetric;
        const stampVal = typeof ev.stamp === 'object' && ev.stamp !== null ? (ev.stamp[lang] || ev.stamp.vi) : ev.stamp;
        return `
        <div class="evidence-polaroid-card evidence-pin-target" data-evidence-id="${ev.id}">
          <div class="evidence-pin-anchor"></div>
          <div class="evidence-stamp-badge">${stampVal}</div>
          <div class="evidence-category-tag">${ev.category[lang]}</div>
          <div class="evidence-metric-display">
            <span class="metric-main">${metricVal}</span>
            <span class="metric-sec">${secMetricVal}</span>
          </div>
          <h4 class="evidence-card-title">${ev.title[lang]}</h4>
          <p class="evidence-card-detail">${ev.detail[lang]}</p>
          <div class="evidence-deduction-ribbon">
            <span class="ribbon-label">${lang === 'vi' ? 'Suy luận:' : 'Deduction:'}</span>
            <span class="ribbon-text">${ev.deduction[lang]}</span>
          </div>
          <button class="evidence-inspect-btn" onclick="window.dossierApp.openEvidenceDetail('${ev.id}')">
            🔍 ${lang === 'vi' ? 'Xem Hồ Sơ Chi Tiết' : 'Inspect Evidence'}
          </button>
        </div>
      `;
      }).join('');

      // Add hover handlers to highlight red string
      evidenceGrid.querySelectorAll('.evidence-polaroid-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.classList.add('active-hover');
          if (this.canvasThreads) this.canvasThreads.draw();
        });
        card.addEventListener('mouseleave', () => {
          card.classList.remove('active-hover');
          if (this.canvasThreads) this.canvasThreads.draw();
        });
      });
    }

    // Render Case Records (Tutoring)
    const caseRecord = data.caseRecords[0];
    const caseContainer = document.getElementById('case-record-content');
    if (caseContainer && caseRecord) {
      caseContainer.innerHTML = `
        <div class="case-file-dossier-paper">
          <div class="case-file-header">
            <div>
              <span class="case-stamp-red">${caseRecord.recordNumber}</span>
              <h3 class="case-headline">${caseRecord.title[lang]}</h3>
            </div>
            <div class="case-meta-box">
              <div><strong>${lang === 'vi' ? 'THỜI GIAN:' : 'DURATION:'}</strong> ${caseRecord.duration[lang]}</div>
              <div><strong>${lang === 'vi' ? 'ĐỐI TƯỢNG:' : 'TARGET:'}</strong> ${caseRecord.audience[lang]}</div>
            </div>
          </div>

          <div class="case-summary-box">
            <p class="case-summary-text">“${caseRecord.dossierSummary[lang]}”</p>
          </div>

          <div class="case-breakdown-grid">
            ${caseRecord.forensicBreakdown.map(b => `
              <div class="case-forensic-item">
                <div class="forensic-item-marker">✓</div>
                <div>
                  <h5 class="forensic-item-label">${b.label[lang]}</h5>
                  <p class="forensic-item-desc">${b.desc[lang]}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="case-timeline-flow">
            <h5 class="timeline-heading">${lang === 'vi' ? 'TIẾN TRÌNH RÈN LUYỆN 3 NĂM' : '3-YEAR PROGRESSION ARCHIVE'}</h5>
            <div class="timeline-nodes-bar">
              ${caseRecord.timeline.map(t => `
                <div class="timeline-milestone">
                  <div class="milestone-year">${t.year}</div>
                  <div class="milestone-dot"></div>
                  <div class="milestone-desc">${t.event[lang]}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="case-deduction-footer">
            <p>${caseRecord.transferableNote[lang]}</p>
          </div>
        </div>
      `;
    }

    // Render Toolkit
    const toolkitGrid = document.getElementById('toolkit-grid');
    if (toolkitGrid) {
      toolkitGrid.innerHTML = data.toolkit.map(t => {
        const hasProof = (Array.isArray(t.proofImages) && t.proofImages.length > 0) || Boolean(t.proofImage);
        return `
        <div class="toolkit-physical-artifact" onclick="window.dossierApp.openToolDetail('${t.id}')" tabindex="0" role="button">
          <div class="artifact-brass-corner"></div>
          <div class="artifact-tag-badge">${t.badge}</div>
          <div class="artifact-icon-box">
            ${this.getToolIconSvg(t.id)}
          </div>
          <h4 class="artifact-name">${t.name}</h4>
          <span class="artifact-type">${t.objectType[lang]}</span>
          <ul class="artifact-feature-list">
            ${t.coreCapabilities.slice(0, 3).map(c => `<li>• ${c[lang]}</li>`).join('')}
          </ul>
          <div class="artifact-inspect-hint">
            <span>🔍 ${lang === 'vi' ? 'Kiểm tra công cụ' : 'Inspect artifact'}</span>
            ${hasProof ? `<span class="artifact-proof-tag" title="${lang === 'vi' ? 'Có hồ sơ minh chứng' : 'Proof Attached'}">📜 ${lang === 'vi' ? 'Minh chứng' : 'Proof'}</span>` : ''}
          </div>
        </div>
      `;
      }).join('');
    }

    // Render Intelligence Files (Languages & Certs)
    const intelGrid = document.getElementById('intel-files-grid');
    if (intelGrid) {
      intelGrid.innerHTML = data.intelligenceFiles.map(file => `
        <div class="intel-folder-card" onclick="window.dossierApp.openIntelDetail('${file.id}')">
          <div class="folder-tab">
            <span class="folder-code">${file.code}</span>
            <span class="folder-stamp">${file.badge}</span>
          </div>
          <div class="folder-body">
            <span class="folder-category">${file.category[lang]}</span>
            <h4 class="folder-title">${file.title[lang]}</h4>
            <p class="folder-detail">${file.detail[lang]}</p>
            <div class="folder-footer-next">
              <strong>${lang === 'vi' ? 'Tiếp tục:' : 'Next step:'}</strong> ${file.nextStep[lang]}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Render Next Case (Vectors & Modular Slots)
    const vectorsContainer = document.getElementById('next-case-vectors');
    if (vectorsContainer) {
      vectorsContainer.innerHTML = data.nextCase.currentVectors.map(v => `
        <div class="vector-investigation-card">
          <div class="vector-header">
            <span class="vector-code">${v.code}</span>
            <span class="vector-tag">${v.tag}</span>
          </div>
          <h4 class="vector-title">${v.title[lang]}</h4>
          <p class="vector-desc">${v.desc[lang]}</p>
        </div>
      `).join('');
    }

    const slotsContainer = document.getElementById('next-case-slots');
    if (slotsContainer) {
      slotsContainer.innerHTML = data.nextCase.modularSlots.map(s => `
        <div class="modular-slot-card">
          <div class="slot-tape"></div>
          <span class="slot-status-badge">${s.status[lang]}</span>
          <h4 class="slot-title">${s.title[lang]}</h4>
          <p class="slot-note">${s.note[lang]}</p>
          <div class="slot-lock-indicator">
            🔒 ${lang === 'vi' ? 'Chờ ghi nhận thực địa' : 'Pending Field Logs'}
          </div>
        </div>
      `).join('');
    }
  }

  getToolIconSvg(id) {
    switch (id) {
      case 'python':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case 'excel':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`;
      case 'word':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`;
      case 'powerpoint':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
      case 'ai':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`;
      case 'data-business':
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }

  getFallbackProofSvg(label) {
    const escaped = (label || 'AUTHENTICATED EVIDENCE').replace(/"/g, '&quot;');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="420" viewBox="0 0 600 420"><rect width="600" height="420" fill="#f4ebd9"/><rect x="15" y="15" width="570" height="390" fill="none" stroke="#ba2626" stroke-width="2" stroke-dasharray="6,3"/><rect x="25" y="25" width="550" height="370" fill="none" stroke="#2c1810" stroke-width="1"/><text x="300" y="70" font-family="Playfair Display, serif" font-size="20" font-weight="700" fill="#2c1810" text-anchor="middle" letter-spacing="2">HANOI YARD • FORENSIC ARCHIVE</text><line x1="120" y1="85" x2="480" y2="85" stroke="#ba2626" stroke-width="1.5"/><text x="300" y="115" font-family="Courier Prime, monospace" font-size="12" fill="#8c786a" text-anchor="middle" letter-spacing="3">DOSSIER EXHIBIT // CASE #070411</text><circle cx="300" cy="180" r="40" fill="none" stroke="#ba2626" stroke-width="2"/><polygon points="300,150 310,175 335,175 315,190 322,215 300,200 278,215 285,190 265,175 290,175" fill="#ba2626" opacity="0.85"/><text x="300" y="255" font-family="Playfair Display, serif" font-size="17" font-weight="700" fill="#2c1810" text-anchor="middle">${escaped}</text><text x="300" y="285" font-family="Courier Prime, monospace" font-size="12" fill="#5c483d" text-anchor="middle">VERIFIED ACADEMIC &amp; COMPETENCY PROOF</text><text x="300" y="315" font-family="Courier Prime, monospace" font-size="11" fill="#8c786a" text-anchor="middle">SUBJECT: NGUYEN MINH ANH • FTU</text><rect x="220" y="340" width="160" height="28" rx="4" fill="#ba2626" opacity="0.15"/><text x="300" y="359" font-family="Courier Prime, monospace" font-size="11" font-weight="700" fill="#ba2626" text-anchor="middle" letter-spacing="2">CONFIDENTIAL</text></svg>`;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  /**
   * Shared evidence proof gallery renderer
   * Renders multiple proof images in a scattered polaroid detective board layout.
   * @param {string[]|string} images - Array of image paths (or single string for fallback)
   * @param {string} altPrefix - Text describing the item for alt attribute and caption
   * @returns {string} HTML string of the proof gallery or empty string
   */
  renderProofGallery(images, altPrefix = '') {
    // Normalization: allow single string or array
    let imgList = [];
    if (Array.isArray(images)) {
      imgList = images.filter(img => typeof img === 'string' && img.trim() !== '');
    } else if (typeof images === 'string' && images.trim() !== '') {
      imgList = [images.trim()];
    }

    if (imgList.length === 0) {
      return '';
    }

    const lang = this.currentLang;
    // Harmonious alternating tilts between -5deg and +5deg for authentic scattered look
    const rotations = [-3.5, 3.2, -4.5, 2.8, -2.5, 4.0, -3.0];

    const framesHtml = imgList.map((imgSrc, idx) => {
      const rot = rotations[idx % rotations.length];
      const tapeRot = (idx % 2 === 0 ? -2.2 : 2.5);
      const label = altPrefix ? `${altPrefix} #${idx + 1}` : `#${idx + 1}`;

      return `
        <div class="modal-proof-polaroid-frame" style="transform: rotate(${rot}deg);" title="${lang === 'vi' ? 'Nhấp để phóng to' : 'Click to enlarge'}: ${label}">
          <div class="proof-polaroid-tape" style="transform: translateX(-50%) rotate(${tapeRot}deg);"></div>
          <img src="${imgSrc}" 
               alt="${lang === 'vi' ? 'Minh chứng' : 'Proof'}: ${label}" 
               loading="lazy" 
               class="modal-proof-img lightbox-trigger" 
               onerror="this.onerror=null; this.src=window.dossierApp.getFallbackProofSvg('${label}');">
          <div class="proof-stamp-watermark">CONFIDENTIAL PROOF • CASE #070411</div>
        </div>
      `;
    }).join('');

    return `
      <div class="modal-proof-image-block">
        <h5 class="modal-h5">${lang === 'vi' ? 'MINH CHỨNG / CHỨNG TỪ XÁC THỰC:' : 'AUTHENTICATED PROOF / CREDENTIAL:'}</h5>
        <div class="proof-gallery-scattered">
          ${framesHtml}
        </div>
      </div>
    `;
  }

  openToolDetail(id) {
    const tool = window.DOSSIER_DATA.toolkit.find(t => t.id === id);
    if (!tool) return;
    const lang = this.currentLang;

    // Upgraded: now renders multi-image gallery using tool.proofImages
    const proofImages = tool.proofImages || (tool.proofImage ? [tool.proofImage] : []);
    const proofSection = this.renderProofGallery(proofImages, tool.name);

    this.showModal(`
      <div class="modal-dossier-card">
        <div class="modal-stamp-badge">${tool.badge}</div>
        <span class="modal-sub-label">${tool.objectType[lang]}</span>
        <h2 class="modal-main-title">${tool.name}</h2>
        
        <div class="modal-section-divider"></div>

        <div class="modal-desc-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'GHI CHÉP ĐIỀU TRA:' : 'INVESTIGATION NOTE:'}</h5>
          <p class="modal-p">${tool.investigationNote[lang]}</p>
        </div>

        <div class="modal-capabilities-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'NĂNG LỰC ĐÃ KIỂM CHỨNG:' : 'VERIFIED CAPABILITIES:'}</h5>
          <ul class="modal-cap-list">
            ${tool.coreCapabilities.map(c => `<li><span class="check">✓</span> ${c[lang]}</li>`).join('')}
          </ul>
        </div>

        ${proofSection}
      </div>
    `);
  }

  openEvidenceDetail(id) {
    const ev = window.DOSSIER_DATA.evidence.find(e => e.id === id);
    if (!ev) return;
    const lang = this.currentLang;
    const stampVal = typeof ev.stamp === 'object' && ev.stamp !== null ? (ev.stamp[lang] || ev.stamp.vi) : ev.stamp;
    const metricVal = typeof ev.metric === 'object' && ev.metric !== null ? (ev.metric[lang] || ev.metric.vi) : ev.metric;
    const secMetricVal = typeof ev.secondaryMetric === 'object' && ev.secondaryMetric !== null ? (ev.secondaryMetric[lang] || ev.secondaryMetric.vi) : ev.secondaryMetric;

    // Render proof gallery right under deduction block
    const proofSection = this.renderProofGallery(ev.proofImages, ev.title[lang]);

    this.showModal(`
      <div class="modal-dossier-card">
        <div class="modal-stamp-badge">${stampVal}</div>
        <span class="modal-sub-label">${ev.category[lang]}</span>
        <h2 class="modal-main-title">${ev.title[lang]}</h2>
        
        <div class="modal-metric-banner">
          <span class="banner-big">${metricVal}</span>
          <span class="banner-sub">${secMetricVal}</span>
        </div>

        <div class="modal-section-divider"></div>

        <div class="modal-desc-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'NỘI DUNG CHỨNG CỨ:' : 'EVIDENCE RECORD:'}</h5>
          <p class="modal-p">${ev.detail[lang]}</p>
        </div>

        <div class="modal-deduction-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'KẾT LUẬN SUY LUẬN:' : 'DEDUCTIVE INTERPRETATION:'}</h5>
          <p class="modal-p-deduction">${ev.deduction[lang]}</p>
        </div>

        ${proofSection}
      </div>
    `);
  }

  openIntelDetail(id) {
    const intel = window.DOSSIER_DATA.intelligenceFiles.find(f => f.id === id);
    if (!intel) return;
    const lang = this.currentLang;

    // Render proof gallery right under next block
    const proofSection = this.renderProofGallery(intel.proofImages, intel.title[lang]);

    // Render embedded YouTube video if present
    const videoSection = intel.videoUrl ? `
      <div class="modal-video-block">
        <h5 class="modal-h5">${lang === 'vi' ? 'VIDEO MINH CHỨNG:' : 'VIDEO EVIDENCE:'}</h5>
        <div class="modal-video-frame">
          <iframe
            width="100%"
            height="315"
            src="${intel.videoUrl}"
            title="${intel.title[lang]}"
            frameborder="0"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      </div>
    ` : '';

    this.showModal(`
      <div class="modal-dossier-card">
        <div class="modal-stamp-badge">${intel.badge}</div>
        <span class="modal-sub-label">${intel.category[lang]} • ${intel.code}</span>
        <h2 class="modal-main-title">${intel.title[lang]}</h2>
        
        <div class="modal-section-divider"></div>

        <div class="modal-desc-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'HỒ SƠ TÌNH BÁO / CHỨNG NHẬN:' : 'INTELLIGENCE DOSSIER RECORD:'}</h5>
          <p class="modal-p">${intel.detail[lang]}</p>
        </div>

        <div class="modal-next-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'ĐỊNH HƯỚNG BƯỚC TIẾP THEO:' : 'NEXT PROGRESSION STEP:'}</h5>
          <p class="modal-p">${intel.nextStep[lang]}</p>
        </div>

        ${videoSection}
        ${proofSection}
      </div>
    `);
  }

  openSummaryModal() {
    const data = window.DOSSIER_DATA;
    const lang = this.currentLang;

    this.showModal(`
      <div class="modal-dossier-card executive-summary-card">
        <div class="modal-stamp-badge">${lang === 'vi' ? 'HỒ SƠ ĐIỀU TRA ĐIỀU HÀNH' : 'EXECUTIVE INVESTIGATION DOSSIER'}</div>
        <span class="modal-sub-label">${lang === 'vi' ? 'VỤ ÁN #070411 // LƯU TRỮ HANOI YARD' : 'CASE #070411 // HANOI YARD ARCHIVE'}</span>
        <h2 class="modal-main-title">${lang === 'vi' ? 'HỒ SƠ NGUYỄN MINH ÁNH' : 'DOSSIER // NGUYEN MINH ANH'}</h2>
        <p class="summary-subtitle">${data.subject.status[lang]} — ${data.subject.institution[lang]}</p>
        
        <div class="summary-metrics-row">
          <div class="metric-box">
            <span class="box-num">3.83/4.0</span>
            <span class="box-lbl">${lang === 'vi' ? 'GPA NĂM 1 (8.98/10)' : 'YEAR 1 GPA (8.98/10)'}</span>
          </div>
          <div class="metric-box">
            <span class="box-num">IELTS 7.0</span>
            <span class="box-lbl">${lang === 'vi' ? 'TIẾNG ANH HỌC THUẬT' : 'ACADEMIC ENGLISH'}</span>
          </div>
          <div class="metric-box">
            <span class="box-num">${lang === 'vi' ? '3 NĂM' : '3 YEARS'}</span>
            <span class="box-lbl">${lang === 'vi' ? 'GIA SƯ TOÁN HỌC' : 'MATH TUTORING'}</span>
          </div>
          <div class="metric-box">
            <span class="box-num">2025–2029</span>
            <span class="box-lbl">${lang === 'vi' ? 'ĐẠI HỌC NGOẠI THƯƠNG' : 'FOREIGN TRADE UNIVERSITY'}</span>
          </div>
        </div>

        <div class="modal-section-divider"></div>

        <div class="summary-text-block">
          <h5 class="modal-h5">${lang === 'vi' ? 'CÁC THÔNG SỐ CỐT LÕI ĐÃ XÁC MINH:' : 'VERIFIED CORE PARAMETERS:'}</h5>
          <ul>
            <li> <strong>${lang === 'vi' ? 'Học vấn:' : 'Education:'}</strong> ${lang === 'vi' ? 'THPT Chuyên Tuyên Quang (Toán) → Đại học Ngoại thương (Kinh tế quốc tế).' : 'High School for the Gifted Tuyen Quang (Math) → Foreign Trade University (International Economics).'}</li>
            <li> <strong>${lang === 'vi' ? 'Học bổng:' : 'Scholarship:'}</strong> ${lang === 'vi' ? 'Học bổng Khuyến khích học tập loại Giỏi – Học kỳ 1 (2025–2026).' : 'Merit-Based Scholarship (Excellent Tier) – Semester 1 (2025–2026).'}</li>
            <li> <strong>${lang === 'vi' ? 'Giải thưởng:' : 'Awards:'}</strong> ${lang === 'vi' ? 'Giải Nhì môn Toán lớp 11 & Giải Ba môn Toán lớp 12 cấp Tỉnh.' : '2nd Prize Grade 11 & 3rd Prize Grade 12 Provincial Math Olympiad.'}</li>
            <li> <strong>${lang === 'vi' ? 'Kỹ năng:' : 'Skills:'}</strong> Python (DataFrame, CSV, JSON, Excel), Excel (Pivot Table, Cross-lookup), Word, PPT, AI Fundamentals (Coursera), Datapot Talkshow.</li>
            <li> <strong>${lang === 'vi' ? 'Triết lý:' : 'Philosophy:'}</strong> ${lang === 'vi' ? "Bác bỏ 'nỗ lực ảo', lập kế hoạch từng giờ và đối chiếu 1 giờ mỗi cuối tuần để đảm bảo hiệu quả thực chất." : "Rejection of 'illusory effort', hourly discipline, and 1-hour weekly calibrations."}</li>
          </ul>
        </div>

        <div class="summary-contact-row">
          <div><strong>Email:</strong> ${data.subject.contact.email}</div>
          <div><strong>${lang === 'vi' ? 'Điện thoại:' : 'Phone:'}</strong> ${data.subject.contact.phone}</div>
          <button class="print-window-btn" onclick="window.print()">🖨️ ${lang === 'vi' ? 'In Hồ Sơ' : 'Print Dossier'}</button>
        </div>
      </div>
    `);
  }

  showModal(contentHtml) {
    const modal = document.getElementById('dossier-modal');
    const container = document.getElementById('modal-inner-content');
    if (!modal || !container) return;

    container.innerHTML = contentHtml;
    modal.classList.add('modal-open');
    if (this.audio && typeof this.audio.playPaperRustle === 'function') this.audio.playPaperRustle();
  }

  closeModal() {
    const modal = document.getElementById('dossier-modal');
    if (modal) {
      modal.classList.remove('modal-open');
      if (this.audio && typeof this.audio.playPaperRustle === 'function') this.audio.playPaperRustle();
    }
  }

  copyEmail() {
    const email = window.DOSSIER_DATA.subject.contact.email;
    navigator.clipboard.writeText(email).then(() => {
      if (this.audio && typeof this.audio.playTypewriter === 'function') this.audio.playTypewriter();
      this.showToast(this.currentLang === 'vi' ? 'ĐÃ SAO CHÉP EMAIL: ' + email : 'COPIED TO CLIPBOARD: ' + email);
    });
  }

  showToast(msg) {
    let toast = document.getElementById('detective-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'detective-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'detective-toast show';
    setTimeout(() => {
      toast.className = 'detective-toast';
    }, 2800);
  }

  setupScrollSpy() {
    const navLinks = document.querySelectorAll('.hud-nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      let currentId = '';
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }
}

window.dossierApp = new DossierApp();
