/**
 * CASE #070411 — PROCEDURAL AUDIO CONTROLLER
 * Quản lý nhạc nền: chỉ phát sau khi mở niêm phong (NMA), tắt ở trang hero.
 */

class DetectiveAudio {
  constructor() {
    this.bgm = document.getElementById('ambient-bgm');

    // Đã "mở hồ sơ" hay chưa. Ở trang hero = false => không bao giờ phát.
    this.dossierOpen = false;

    // Người dùng có đang tắt tiếng bằng nút SOUND hay không (nhớ giữa các lần vào web)
    this.isMuted = localStorage.getItem('nma_audio_muted') === 'true';

    this.targetVolume = 0.35; // âm lượng nền, chỉnh 0.0 - 1.0
    this.fadeTimer = null;

    if (this.bgm) {
      this.bgm.volume = 0;
      this.bgm.loop = true;
    }
  }

  /* ---------- API chính ---------- */

  // Gọi khi bấm nút NMA / MỞ NIÊM PHONG
  startAmbient() {
    this.dossierOpen = true;
    if (!this.bgm || this.isMuted) return;

    const promise = this.bgm.play();
    if (promise && typeof promise.catch === 'function') {
      // Trình duyệt chặn autoplay: bỏ qua im lặng, lần click sau sẽ chạy
      promise.catch(() => {});
    }
    this._fadeTo(this.targetVolume, 900);
  }

  // Gọi khi quay lại trang hero (nút BACK / CLOSED REPORT)
  stopAmbient() {
    this.dossierOpen = false;
    if (!this.bgm) return;

    this._fadeTo(0, 500, () => {
      this.bgm.pause();
      this.bgm.currentTime = 0;
    });
  }

  // Gọi bởi nút SOUND trên thanh nav. Trả về true nếu đang tắt tiếng.
  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('nma_audio_muted', String(this.isMuted));

    if (!this.bgm) return this.isMuted;

    if (this.isMuted) {
      this._fadeTo(0, 350, () => this.bgm.pause());
    } else if (this.dossierOpen) {
      // Chỉ bật lại khi đang ở trong hồ sơ, không bật ở trang hero
      const promise = this.bgm.play();
      if (promise && typeof promise.catch === 'function') promise.catch(() => {});
      this._fadeTo(this.targetVolume, 500);
    }

    return this.isMuted;
  }

  /* ---------- Hiệu ứng âm thanh phụ (tuỳ chọn) ---------- */
  // app.js có gọi 3 hàm này. Để trống thì web vẫn chạy bình thường.
  // Nếu muốn dùng, thêm file mp3 tương ứng và bỏ comment phần _sfx bên dưới.

  playWaxSnap() { /* this._sfx('assets/audio/wax-snap.mp3'); */ }
  playPaperRustle() { /* this._sfx('assets/audio/paper.mp3'); */ }
  playTypewriter() { /* this._sfx('assets/audio/type.mp3'); */ }
  playBrassChime() { /* this._sfx('assets/audio/chime.mp3'); */ }

  _sfx(src) {
    if (this.isMuted) return;
    const clip = new Audio(src);
    clip.volume = 0.5;
    clip.play().catch(() => {});
  }

  /* ---------- Nội bộ ---------- */

  _fadeTo(target, duration, onDone) {
    if (!this.bgm) return;
    clearInterval(this.fadeTimer);

    const start = this.bgm.volume;
    const steps = Math.max(1, Math.round(duration / 40));
    let i = 0;

    this.fadeTimer = setInterval(() => {
      i += 1;
      const v = start + (target - start) * (i / steps);
      this.bgm.volume = Math.min(1, Math.max(0, v));

      if (i >= steps) {
        clearInterval(this.fadeTimer);
        if (typeof onDone === 'function') onDone();
      }
    }, 40);
  }
}

// app.js đọc biến này, nên phải khởi tạo ngay khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.detectiveAudio = new DetectiveAudio();
  });
} else {
  window.detectiveAudio = new DetectiveAudio();
}
