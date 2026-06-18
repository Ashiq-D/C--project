const fs = require('fs');

let css = `
.bubble {
  position: absolute;
  height: 40px;
  width: 40px;
  background: rgba(229, 211, 179, 0.1);
  border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  opacity: 1;
  animation: move infinite;
  transform: scale(var(--scale)) rotate(var(--initial-rotate));
  filter: drop-shadow(0 0 15px rgba(205, 127, 50, 0.3));
}

.bubble::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
  box-shadow: -1.5px 3px 1.2px rgba(229, 211, 179, 0.1), 
              -3.5px 5px 3.5px rgba(0,0,0,0), 
              inset -0.5px 0.5px 0.9px rgba(205, 127, 50, 0.3), 
              inset 0.15px 0.5px 0.9px rgba(229, 211, 179, 0.4), 
              inset 1.5px -1.5px 1.5px rgba(255, 255, 255, 0.4), 
              inset 5px -5px 5.5px rgba(205, 127, 50, 0.15);
}

.bubble::after {
  content: '';
  position: absolute;
  height: 20%;
  width: 20%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
  left: 60%;
  top: 20%;
  box-shadow: 1.5px 5px 0 -0.9px rgba(255, 255, 255, 0.3);
  opacity: 1;
}

@keyframes move {
  0% {
    transform: translateY(0) translateX(0) rotate(var(--initial-rotate)) scale(var(--scale));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(var(--translateY)) translateX(var(--translateX)) rotate(var(--rotate)) scale(var(--scale));
    opacity: 0;
  }
}
`;

for (let i = 1; i <= 30; i++) {
  const transY = -(Math.floor(Math.random() * 200) + 100) + 'px';
  const transX = (Math.floor(Math.random() * 400) - 200) + '%';
  const rot = (Math.floor(Math.random() * 90) - 45) + 'deg';
  const scale = (Math.random() * 1.5 + 0.5).toFixed(2);
  const initRot = (Math.floor(Math.random() * 90) - 45) + 'deg';
  const dur = (Math.floor(Math.random() * 10) + 8) + 's';
  const delay = (Math.random() * 5).toFixed(1) + 's';
  const left = Math.floor(Math.random() * 100) + '%';
  const bottom = Math.floor(Math.random() * 100) + '%';
  
  css += `
.bubble:nth-child(${i}) {
  --translateY: ${transY};
  --translateX: ${transX};
  --rotate: ${rot};
  --scale: ${scale};
  --initial-rotate: ${initRot};
  left: ${left};
  bottom: ${bottom};
  animation-duration: ${dur};
  animation-delay: ${delay};
}
`;
}

fs.writeFileSync('src/components/bubbles.css', css);
