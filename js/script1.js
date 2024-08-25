// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('inkCanvas');
//     const ctx = canvas.getContext('2d');
//     resizeCanvas();
  
//     let lastX = 0;
//     let lastY = 0;
//     let hue = 0;
//     let trails = []; // 用于存储墨迹轨迹的数组
  
//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
  
//       // 绘制每个墨迹轨迹
//       trails.forEach(trail => {
//         ctx.strokeStyle = `hsl(${trail.hue}, 50%, 50%)`;
//         ctx.lineWidth = trail.width;
//         ctx.beginPath();
//         ctx.moveTo(trail.lastX, trail.lastY);
//         ctx.lineTo(trail.x, trail.y);
//         ctx.stroke();
  
//         // 更新轨迹信息，使其逐渐变淡和变细
//         trail.width *= 0.99;
//         trail.hue += 1;
//         trail.alpha *= 0.99;
//         ctx.globalAlpha = trail.alpha;
  
//         // 更新位置，模拟墨迹的移动
//         trail.lastX = trail.x;
//         trail.lastY = trail.y;
//       });
  
//       // 移除透明度低的墨迹轨迹
//       trails = trails.filter(trail => trail.alpha > 0.05);
  
//       requestAnimationFrame(draw); // 循环调用 draw 函数
//     }
  
//     function addTrail(x, y) {
//       const width = Math.random() * 10 + 5; // 随机宽度
//       const alpha = 0.8; // 初始透明度
  
//       trails.push({lastX: x, lastY: y, x, y, hue, width, alpha});
//     }
  
//     function onMouseMove(e) {
//       lastX = e.offsetX;
//       lastY = e.offsetY;
//       addTrail(lastX, lastY);
//     }
  
//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
  
//     canvas.addEventListener('mousemove', onMouseMove);
//     window.addEventListener('resize', resizeCanvas);
  
//     // 初始化毛笔样式
//     ctx.lineJoin = 'round';
//     ctx.lineCap = 'round';
  
//     // 开始绘制循环
//     draw();
//   });

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('brushCanvas');
//     const ctx = canvas.getContext('2d');
  
//     // 设置 canvas 大小为全屏
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
  
//     let isDrawing = false;
//     let lastX = 0;
//     let lastY = 0;
//     let hue = 0;
//     let direction = true;
  
//     function draw(e) {
//       if (!isDrawing) return;
//       ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // 用 HSL 颜色模式实现颜色变化
//       ctx.beginPath();
//       ctx.moveTo(lastX, lastY);
//       ctx.lineTo(e.offsetX, e.offsetY);
//       ctx.stroke();
//       [lastX, lastY] = [e.offsetX, e.offsetY];
  
//       hue++; // 改变颜色
//       if (hue >= 360) {
//         hue = 0;
//       }
  
//       if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
//         direction = !direction;
//       }
  
//       if (direction) {
//         ctx.lineWidth++;
//       } else {
//         ctx.lineWidth--;
//       }
//     }
  
//     canvas.addEventListener('mousedown', (e) => {
//       isDrawing = true;
//       [lastX, lastY] = [e.offsetX, e.offsetY];
//     });
  
//     canvas.addEventListener('mousemove', draw);
//     canvas.addEventListener('mouseup', () => isDrawing = false);
//     canvas.addEventListener('mouseout', () => isDrawing = false);
//   });
  


    