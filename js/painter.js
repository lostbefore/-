document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('inkCanvas');
    const ctx = canvas.getContext('2d');
    resizeCanvas();
  
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let lastTime = Date.now();
    let lastLineWidth = 5;
  
    function startDrawing(e) {
      isDrawing = true;
      lastX = e.offsetX;
      lastY = e.offsetY;
      lastTime = Date.now();
      hue = 0;
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  
    function draw(e) {
      if (!isDrawing) return;
      
      ctx.strokeStyle = `hsl(${hue}, 50%, 50%)`; // 改变颜色
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
  
      // 根据鼠标移动速度调整线条粗细
      const currentTime = Date.now();
      const distance = Math.sqrt((e.offsetX - lastX) ** 2 + (e.offsetY - lastY) ** 2);
      const timePassed = currentTime - lastTime;
      const speed = distance / timePassed;
      const lineWidth = Math.min(25, 1 / speed * 10); // 根据速度计算线条宽度
  
      ctx.lineWidth = lineWidth;
      lastLineWidth = lineWidth;
      lastX = e.offsetX;
      lastY = e.offsetY;
      lastTime = currentTime;
      hue = (hue + 1) % 360; // 改变颜色
    }
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('resize', resizeCanvas);
  
    // 初始化毛笔样式
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = lastLineWidth;
    ctx.globalAlpha = 0.7; // 设置透明度以模拟墨水扩散
  });