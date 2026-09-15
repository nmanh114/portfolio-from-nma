/**
 * Interactive Deduction Chain Controller
 * Illustrates the subject's critical learning philosophy:
 * Rejecting "Illusory Effort" ("Nỗ lực ảo") -> Systemic Hourly Planning & 1-Hour Weekend Calibration -> Peak Efficacy.
 */
class DeductionChain {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentStepIndex = 0;
    this.lang = 'vi';
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setLanguage(lang) {
    this.lang = lang;
    this.render();
  }

  render() {
    const data = window.DOSSIER_DATA.deduction;
    const steps = data.steps;

    let stepsHtml = steps.map((step, idx) => {
      const isActive = idx === this.currentStepIndex;
      const isPast = idx < this.currentStepIndex;
      return `
        <div class="deduction-node ${isActive ? 'active-node' : ''} ${isPast ? 'past-node' : ''}" 
             data-step="${idx}" 
             tabindex="0"
             role="button"
             aria-label="Step ${step.num}: ${step.label[this.lang]}">
          <div class="node-connector-line"></div>
          <div class="node-indicator">
            <span class="node-num">${step.num}</span>
            <span class="node-pulse"></span>
          </div>
          <div class="node-brief">
            <span class="node-label">${step.label[this.lang]}</span>
            <span class="node-sub">${step.subtitle[this.lang]}</span>
          </div>
        </div>
      `;
    }).join('');

    const activeStep = steps[this.currentStepIndex];

    this.container.innerHTML = `
      <div class="deduction-chain-wrapper">
        <div class="deduction-nodes-timeline">
          ${stepsHtml}
        </div>

        <div class="deduction-detail-card" id="active-deduction-card">
          <div class="card-header-bar">
            <span class="card-phase-badge">${activeStep.status}</span>
            <span class="card-step-tracker">${this.lang === 'vi' ? 'BƯỚC' : 'STEP'} ${activeStep.num} / 05</span>
          </div>
          <h3 class="card-step-title">${activeStep.label[this.lang]}</h3>
          <p class="card-step-sub">${activeStep.subtitle[this.lang]}</p>
          <div class="card-step-divider"></div>
          <p class="card-step-desc">${activeStep.desc[this.lang]}</p>
          
          <div class="card-action-nav">
            <button class="deduction-nav-btn prev-btn" ${this.currentStepIndex === 0 ? 'disabled' : ''} id="deduction-prev">
              ← ${this.lang === 'vi' ? 'Manh mối trước' : 'Previous Clue'}
            </button>
            <div class="step-indicator-dots">
              ${steps.map((_, i) => `<span class="dot ${i === this.currentStepIndex ? 'dot-active' : ''}"></span>`).join('')}
            </div>
            <button class="deduction-nav-btn next-btn" ${this.currentStepIndex === steps.length - 1 ? 'disabled' : ''} id="deduction-next">
              ${this.lang === 'vi' ? 'Tiếp tục suy luận' : 'Next Deduction'} →
            </button>
          </div>
        </div>

        <div class="deduction-verdict-banner">
          <div class="verdict-wax-mark">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div class="verdict-content">
            <span class="verdict-label">${this.lang === 'vi' ? 'KẾT LUẬN ĐIỀU TRA' : 'INVESTIGATION VERDICT'}</span>
            <p class="verdict-text">${data.verdict[this.lang]}</p>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const nodes = this.container.querySelectorAll('.deduction-node');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const stepIdx = parseInt(node.dataset.step, 10);
        this.goToStep(stepIdx);
      });
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const stepIdx = parseInt(node.dataset.step, 10);
          this.goToStep(stepIdx);
        }
      });
    });

    const prevBtn = this.container.querySelector('#deduction-prev');
    const nextBtn = this.container.querySelector('#deduction-next');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStepIndex > 0) {
          this.goToStep(this.currentStepIndex - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStepIndex < window.DOSSIER_DATA.deduction.steps.length - 1) {
          this.goToStep(this.currentStepIndex + 1);
        }
      });
    }
  }

  goToStep(index) {
    this.currentStepIndex = index;
    if (window.detectiveAudio && typeof window.detectiveAudio.playTypewriter === 'function') {
      window.detectiveAudio.playTypewriter();
    }
    this.render();
  }
}

window.DeductionChain = DeductionChain;
