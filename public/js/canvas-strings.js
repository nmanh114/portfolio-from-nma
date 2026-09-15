/**
 * Dynamic Red Thread of Logic
 * Renders physical forensic red strings with catenary curves connecting evidence pins on corkboard.
 */
class EvidenceThreadCanvas {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    if (!this.canvas || !this.container) return;

    this.ctx = this.canvas.getContext('2d');
    this.connections = [];
    this.resizeObserver = null;
    this.animationFrame = null;
    this.time = 0;

    this.init();
  }

  init() {
    this.updateSize();
    window.addEventListener('resize', () => {
      this.updateSize();
      this.draw();
    });

    if (window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateSize();
        this.draw();
      });
      this.resizeObserver.observe(this.container);
    }

    // Scroll listener to update dynamic position
    window.addEventListener('scroll', () => {
      if (this.isElementInViewport(this.container)) {
        this.draw();
      }
    }, { passive: true });

    // Initial draw delayed for DOM layout
    setTimeout(() => {
      this.updateSize();
      this.draw();
    }, 300);
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  updateSize() {
    if (!this.container || !this.canvas) return;
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = `${rect.width}px`;
    this.canvas.style.height = `${rect.height}px`;

    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  // Draw catenary curve (drooping string) between two points
  drawCatenaryString(x1, y1, x2, y2, sag = 20, color = 'rgba(186, 38, 38, 0.85)', isHighlighted = false) {
    const ctx = this.ctx;
    const midX = (x1 + x2) / 2;
    const dist = Math.hypot(x2 - x1, y2 - y1);
    
    // Sag proportional to distance
    const dynamicSag = Math.min(sag + dist * 0.04, 45);
    const midY = (y1 + y2) / 2 + dynamicSag;

    // Drop shadow
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1 + 3);
    ctx.quadraticCurveTo(midX, midY + 3, x2, y2 + 3);
    ctx.strokeStyle = 'rgba(10, 8, 6, 0.35)';
    ctx.lineWidth = isHighlighted ? 2.5 : 1.5;
    ctx.stroke();
    ctx.restore();

    // The Red String
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(midX, midY, x2, y2);
    ctx.strokeStyle = isHighlighted ? '#e63946' : color;
    ctx.lineWidth = isHighlighted ? 2.8 : 1.8;
    ctx.setLineDash(isHighlighted ? [] : [6, 2]);
    ctx.shadowColor = isHighlighted ? 'rgba(230, 57, 70, 0.6)' : 'rgba(166, 43, 43, 0.3)';
    ctx.shadowBlur = isHighlighted ? 8 : 3;
    ctx.stroke();
    ctx.restore();

    // Brass Pin heads at endpoints
    this.drawPin(x1, y1);
    this.drawPin(x2, y2);
  }

  drawPin(x, y) {
    const ctx = this.ctx;
    ctx.save();
    // Pin shadow
    ctx.beginPath();
    ctx.arc(x + 2, y + 2, 4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fill();

    // Brass Pin outer
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#dfb76c';
    ctx.fill();

    // Pin core highlight
    ctx.beginPath();
    ctx.arc(x - 1, y - 1, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#fff4cf';
    ctx.fill();
    ctx.restore();
  }

  draw() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Locate target pin elements
    const containerRect = this.container.getBoundingClientRect();
    const centralHub = document.getElementById('evidence-deduction-hub');
    const cards = this.container.querySelectorAll('.evidence-pin-target');

    if (!centralHub || cards.length === 0) return;

    const hubRect = centralHub.getBoundingClientRect();
    const hubX = hubRect.left + hubRect.width / 2 - containerRect.left;
    const hubY = hubRect.top + 28 - containerRect.top;

    cards.forEach((card, idx) => {
      const pinNode = card.querySelector('.evidence-pin-anchor') || card;
      const cardRect = pinNode.getBoundingClientRect();
      const cardX = cardRect.left + cardRect.width / 2 - containerRect.left;
      const cardY = cardRect.top + 16 - containerRect.top;

      const isHovered = card.classList.contains('active-hover');
      const sagVariation = 15 + (idx % 3) * 8;

      this.drawCatenaryString(hubX, hubY, cardX, cardY, sagVariation, 'rgba(186, 38, 38, 0.85)', isHovered);
    });
  }
}

window.EvidenceThreadCanvas = EvidenceThreadCanvas;
