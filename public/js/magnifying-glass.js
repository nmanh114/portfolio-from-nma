/**
 * Interactive Detective Magnifying Glass Lens
 * Provides an authentic optical inspection lens that tracks cursor and reveals fine forensic details.
 */
class MagnifyingGlassInspector {
  constructor() {
    this.lens = null;
    this.isActive = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.zoomFactor = 1.8;
    this.init();
  }

  init() {
    this.createLensElement();
    this.bindEvents();
  }

  createLensElement() {
    const lens = document.createElement('div');
    lens.id = 'detective-lens';
    lens.className = 'detective-magnifier-lens';
    lens.innerHTML = `
      <div class="lens-glass"></div>
      <div class="lens-brass-rim"></div>
      <div class="lens-reticle">
        <span class="reticle-h"></span>
        <span class="reticle-v"></span>
        <span class="lens-badge">FORENSIC LENS 1.8X</span>
      </div>
      <div class="lens-handle"></div>
    `;
    document.body.appendChild(lens);
    this.lens = lens;
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      if (this.isActive) {
        this.updatePosition();
      }
    }, { passive: true });

    // Keyboard shortcut 'M' for Magnifier
    window.addEventListener('keydown', (e) => {
      if (e.key === 'm' || e.key === 'M') {
        // Only if not focused in an input
        if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
        this.toggle();
      }
    });
  }

  toggle() {
    this.isActive = !this.isActive;
    if (this.lens) {
      if (this.isActive) {
        this.lens.classList.add('lens-visible');
        document.body.classList.add('magnifier-mode-active');
        if (window.detectiveAudio && typeof window.detectiveAudio.playBrassChime === 'function') {
          window.detectiveAudio.playBrassChime();
        }
        this.updatePosition();
      } else {
        this.lens.classList.remove('lens-visible');
        document.body.classList.remove('magnifier-mode-active');
      }
    }
    const btn = document.getElementById('toggle-lens-btn');
    if (btn) {
      btn.classList.toggle('active-toggle', this.isActive);
    }
    return this.isActive;
  }

  updatePosition() {
    if (!this.lens) return;
    this.lens.style.transform = `translate3d(${this.mouseX}px, ${this.mouseY}px, 0)`;
  }
}

window.magnifyingGlassInspector = new MagnifyingGlassInspector();
