'use client';

import { useEffect } from 'react';

const ParticleAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particles = [];
    const colors = ['#00ffe1', '#7f00ff', '#00bfff'];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      requestAnimationFrame(animate);
    };

    animate();
    // Cleanup
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div>
      <canvas id='particle-canvas'></canvas>
      <header>
        <h1 style={{ background: 'linear-gradient(to right, #00ffe1, #7f00ff)'}}>
          SuiSense AI
        </h1>
      </header>
      <p>This is the SuiSense AI homepage.</p>
      <div>
        <a href='https://github.com/Mitsu091485/SuiSense-AI'>GitHub</a>
        <a href='https://twitter.com/SuiSenseAI'>Twitter</a>
      </div>
    </div>
  );
};

export default ParticleAnimation;