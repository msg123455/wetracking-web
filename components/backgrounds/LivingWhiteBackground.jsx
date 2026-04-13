"use client"
import React, { useRef, useEffect } from 'react';

export default function LivingWhiteBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create dots
    const dots = [];
    const dotCount = 80;
    const spacing = 60;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: 0,
        baseY: 0,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
      });
    }

    // Set base positions
    dots.forEach(dot => {
      dot.baseX = dot.x;
      dot.baseY = dot.y;
    });

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        // Gentle floating
        dot.baseX += dot.speedX;
        dot.baseY += dot.speedY;

        // Keep dots in bounds
        if (dot.baseX < 0 || dot.baseX > canvas.width) dot.speedX *= -1;
        if (dot.baseY < 0 || dot.baseY > canvas.height) dot.speedY *= -1;

        // Mouse interaction
        const dx = mouseX - dot.baseX;
        const dy = mouseY - dot.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        let offsetX = 0;
        let offsetY = 0;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 20;
          offsetX = (dx / distance) * force;
          offsetY = (dy / distance) * force;
        }

        const finalX = dot.baseX + offsetX;
        const finalY = dot.baseY + offsetY;

        // Draw dot
        ctx.beginPath();
        ctx.arc(finalX, finalY, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 122, 237, 0.15)';
        ctx.fill();

        // Draw connections to nearby dots
        dots.forEach(otherDot => {
          const dist = Math.sqrt(
            Math.pow(finalX - (otherDot.baseX), 2) + 
            Math.pow(finalY - (otherDot.baseY), 2)
          );

          if (dist < spacing) {
            ctx.beginPath();
            ctx.moveTo(finalX, finalY);
            ctx.lineTo(otherDot.baseX, otherDot.baseY);
            ctx.strokeStyle = `rgba(0, 122, 237, ${0.08 * (1 - dist / spacing)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Base solid background */}
      <div className="absolute inset-0 bg-[#fafbfc]" />
      
      {/* Subtle brand color gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#007aed]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00ffd7]/5 rounded-full blur-3xl" />
      
      {/* Canvas for dots */}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
