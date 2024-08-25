document.addEventListener('DOMContentLoaded', () => {
    let lastTime = 0;
    
    document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    
    if (now - lastTime < 100) return; 
    lastTime = now;
    
    const stroke = document.createElement('div');
    stroke.classList.add('brush-cursor');
    
    const size = Math.random() * 30 + 5; 
    stroke.style.width = `${size}px`;
    stroke.style.height = `${size}px`;
    
    const hue = 150 ;
    const saturation = 80 + Math.random() * 50; // 随机饱和度
    const lightness = 20+ Math.random() * 10; // 随机亮度
    stroke.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
    
    const x = e.pageX;
    const y = e.pageY;
    stroke.style.left = `${x - size / 2}px`;
    stroke.style.top = `${y - size / 2}px`;
    
    // 随机化墨点形状和旋转角度
    const rotation = Math.random() * 360;
    stroke.style.borderRadius = `${Math.random() * 50}%`;
    stroke.style.transform = `rotate(${rotation}deg)`;
    
    document.body.appendChild(stroke);
    
    stroke.addEventListener('animationend', () => {
    stroke.remove();
    });
    });
    
    });
    
    //光标
    const cursorInner = document.getElementById('customCursorInner');
      const cursorOuter = document.getElementById('customCursorOuter');
      document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursorInner.style.left = `${mouseX}px`;
        cursorInner.style.top = `${mouseY}px`;
        cursorOuter.style.left = `${mouseX}px`;
        cursorOuter.style.top = `${mouseY}px`;
      });


      