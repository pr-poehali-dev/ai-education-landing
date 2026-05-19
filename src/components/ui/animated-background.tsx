import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const CELL = 70;
    const cols = Math.ceil(width / CELL) + 1;
    const rows = Math.ceil(height / CELL) + 1;

    interface Node {
      x: number;
      y: number;
      phase: number;
      speed: number;
      maxAlpha: number;
    }

    interface Pulse {
      fromX: number;
      fromY: number;
      toX: number;
      toY: number;
      progress: number;
      speed: number;
      alpha: number;
      color: string;
    }

    const nodes: Node[] = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (Math.random() < 0.18) {
          nodes.push({
            x: c * CELL,
            y: r * CELL,
            phase: Math.random() * Math.PI * 2,
            speed: 0.003 + Math.random() * 0.004,
            maxAlpha: 0.15 + Math.random() * 0.35,
          });
        }
      }
    }

    const pulses: Pulse[] = [];
    const PULSE_COLORS = [
      'rgba(34,211,238,',
      'rgba(139,92,246,',
      'rgba(96,165,250,',
    ];

    const spawnPulse = () => {
      const horiz = Math.random() > 0.5;
      const color = PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)];
      if (horiz) {
        const r = Math.floor(Math.random() * rows);
        const startC = Math.floor(Math.random() * (cols - 3));
        const len = 2 + Math.floor(Math.random() * 4);
        pulses.push({
          fromX: startC * CELL, fromY: r * CELL,
          toX: (startC + len) * CELL, toY: r * CELL,
          progress: 0,
          speed: 0.004 + Math.random() * 0.005,
          alpha: 0.5 + Math.random() * 0.4,
          color,
        });
      } else {
        const c = Math.floor(Math.random() * cols);
        const startR = Math.floor(Math.random() * (rows - 3));
        const len = 2 + Math.floor(Math.random() * 4);
        pulses.push({
          fromX: c * CELL, fromY: startR * CELL,
          toX: c * CELL, toY: (startR + len) * CELL,
          progress: 0,
          speed: 0.004 + Math.random() * 0.005,
          alpha: 0.5 + Math.random() * 0.4,
          color,
        });
      }
    };

    for (let i = 0; i < 12; i++) {
      setTimeout(() => spawnPulse(), i * 400);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#040818';
      ctx.fillRect(0, 0, width, height);

      // Сетка вертикальные линии
      ctx.lineWidth = 0.5;
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(34,211,238,0.055)';
        ctx.moveTo(c * CELL, 0);
        ctx.lineTo(c * CELL, height);
        ctx.stroke();
      }
      // Сетка горизонтальные линии
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(139,92,246,0.04)';
        ctx.moveTo(0, r * CELL);
        ctx.lineTo(width, r * CELL);
        ctx.stroke();
      }

      // Импульсы
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        const t = Math.min(p.progress, 1);
        const cx = p.fromX + (p.toX - p.fromX) * t;
        const cy = p.fromY + (p.toY - p.fromY) * t;

        const tailT = Math.max(0, t - 0.25);
        const tailX = p.fromX + (p.toX - p.fromX) * tailT;
        const tailY = p.fromY + (p.toY - p.fromY) * tailT;

        const grad = ctx.createLinearGradient(tailX, tailY, cx, cy);
        grad.addColorStop(0, `${p.color}0)`);
        grad.addColorStop(1, `${p.color}${p.alpha.toFixed(2)})`);

        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = grad;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 6);
        glow.addColorStop(0, `${p.color}${p.alpha.toFixed(2)})`);
        glow.addColorStop(1, `${p.color}0)`);
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          spawnPulse();
        }
      }

      // Узлы-нейроны
      for (const n of nodes) {
        n.phase += n.speed;
        const alpha = (Math.sin(n.phase) * 0.5 + 0.5) * n.maxAlpha;
        const r = 1.5 + (Math.sin(n.phase) * 0.5 + 0.5) * 2;

        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        glow.addColorStop(0, `rgba(34,211,238,${alpha})`);
        glow.addColorStop(1, 'rgba(34,211,238,0)');
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(34,211,238,${alpha * 2})`;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Виньетка
      const vignette = ctx.createRadialGradient(
        width / 2, height / 2, height * 0.3,
        width / 2, height / 2, height * 0.9
      );
      vignette.addColorStop(0, 'rgba(4,8,24,0)');
      vignette.addColorStop(1, 'rgba(4,8,24,0.7)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default AnimatedBackground;
