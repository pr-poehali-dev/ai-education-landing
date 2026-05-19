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
    const MOUSE_RADIUS = 180;  // радиус притяжения мыши
    const mouse = { x: -9999, y: -9999 };

    interface Node {
      x: number;
      y: number;
      phase: number;
      speed: number;
      maxAlpha: number;
      // для интерактива
      excitement: number; // 0..1, нарастает при близости мыши
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
      fromMouse?: boolean;
    }

    let cols = Math.ceil(width / CELL) + 1;
    let rows = Math.ceil(height / CELL) + 1;

    const buildNodes = () => {
      const list: Node[] = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (Math.random() < 0.18) {
            list.push({
              x: c * CELL,
              y: r * CELL,
              phase: Math.random() * Math.PI * 2,
              speed: 0.003 + Math.random() * 0.004,
              maxAlpha: 0.15 + Math.random() * 0.35,
              excitement: 0,
            });
          }
        }
      }
      return list;
    };

    let nodes: Node[] = buildNodes();

    const pulses: Pulse[] = [];
    const PULSE_COLORS = [
      'rgba(34,211,238,',
      'rgba(139,92,246,',
      'rgba(96,165,250,',
    ];

    const spawnPulse = (fromMouse = false) => {
      const horiz = Math.random() > 0.5;
      const color = fromMouse ? 'rgba(34,211,238,' : PULSE_COLORS[Math.floor(Math.random() * PULSE_COLORS.length)];

      if (fromMouse) {
        // Импульс от ближайшего к мыши узла по сетке
        const snapX = Math.round(mouse.x / CELL) * CELL;
        const snapY = Math.round(mouse.y / CELL) * CELL;
        const dir = Math.random() > 0.5;
        const len = (2 + Math.floor(Math.random() * 3)) * CELL;
        const sign = Math.random() > 0.5 ? 1 : -1;
        pulses.push({
          fromX: snapX, fromY: snapY,
          toX: dir ? snapX + sign * len : snapX,
          toY: dir ? snapY : snapY + sign * len,
          progress: 0,
          speed: 0.008 + Math.random() * 0.006,
          alpha: 0.85,
          color,
          fromMouse: true,
        });
        return;
      }

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

    // Мышь спаунит импульсы периодически
    let mouseSpawnTimer = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#040818';
      ctx.fillRect(0, 0, width, height);

      // --- Мягкое свечение вокруг курсора ---
      if (mouse.x > 0) {
        const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS);
        mg.addColorStop(0, 'rgba(34,211,238,0.06)');
        mg.addColorStop(0.5, 'rgba(139,92,246,0.03)');
        mg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = mg;
        ctx.fillRect(0, 0, width, height);
      }

      // --- Сетка с подсветкой линий вблизи курсора ---
      ctx.lineWidth = 0.5;
      for (let c = 0; c < cols; c++) {
        const lineX = c * CELL;
        const dist = Math.abs(lineX - mouse.x);
        const glow = dist < MOUSE_RADIUS ? (1 - dist / MOUSE_RADIUS) * 0.25 : 0;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(34,211,238,${0.055 + glow})`;
        ctx.lineWidth = dist < MOUSE_RADIUS ? 0.5 + (1 - dist / MOUSE_RADIUS) * 0.8 : 0.5;
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, height);
        ctx.stroke();
      }
      for (let r = 0; r < rows; r++) {
        const lineY = r * CELL;
        const dist = Math.abs(lineY - mouse.y);
        const glow = dist < MOUSE_RADIUS ? (1 - dist / MOUSE_RADIUS) * 0.2 : 0;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(139,92,246,${0.04 + glow})`;
        ctx.lineWidth = dist < MOUSE_RADIUS ? 0.5 + (1 - dist / MOUSE_RADIUS) * 0.6 : 0.5;
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }

      // --- Импульсы ---
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
        ctx.lineWidth = p.fromMouse ? 2 : 1.5;
        ctx.strokeStyle = grad;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        const glowR = p.fromMouse ? 9 : 6;
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        glow.addColorStop(0, `${p.color}${p.alpha.toFixed(2)})`);
        glow.addColorStop(1, `${p.color}0)`);
        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
        ctx.fill();

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          if (!p.fromMouse) spawnPulse();
        }
      }

      // --- Узлы-нейроны ---
      for (const n of nodes) {
        n.phase += n.speed;

        // Притяжение мыши — нарастает excitement
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;
        n.excitement += (proximity - n.excitement) * 0.08;

        const baseAlpha = (Math.sin(n.phase) * 0.5 + 0.5) * n.maxAlpha;
        const alpha = Math.min(1, baseAlpha + n.excitement * 0.7);
        const r = 1.5 + (Math.sin(n.phase) * 0.5 + 0.5) * 2 + n.excitement * 3;

        // Цвет меняется при возбуждении: cyan → белый
        const excR = Math.round(34 + n.excitement * 221);
        const excG = Math.round(211 + n.excitement * 44);
        const excB = Math.round(238 + n.excitement * 17);

        const nglow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4 + n.excitement * 8);
        nglow.addColorStop(0, `rgba(${excR},${excG},${excB},${alpha})`);
        nglow.addColorStop(1, `rgba(${excR},${excG},${excB},0)`);
        ctx.beginPath();
        ctx.fillStyle = nglow;
        ctx.arc(n.x, n.y, r * 4 + n.excitement * 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `rgba(${excR},${excG},${excB},${Math.min(1, alpha * 2)})`;
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- Спаун импульсов от мыши ---
      if (mouse.x > 0) {
        mouseSpawnTimer++;
        if (mouseSpawnTimer > 30) {
          spawnPulse(true);
          mouseSpawnTimer = 0;
        }
      }

      // --- Виньетка ---
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

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / CELL) + 1;
      rows = Math.ceil(height / CELL) + 1;
      nodes = buildNodes();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
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
