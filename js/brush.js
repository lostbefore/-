document.addEventListener("DOMContentLoaded", function() {
    let x, y; 

    document.addEventListener('mousedown', (e) => {
      x = e.pageX;
      y = e.pageY;
    
      brush.style.left = x + 'px';
      brush.style.top = y + 'px';
    
      // 其他初始化代码
    });
    
    document.addEventListener('mousemove', (e) => {
      let newX = e.pageX;
      let newY = e.pageY;
    
      let deltaX = newX - x;
      let deltaY = newY - y;
    
      brush.style.left = (parseInt(brush.style.left) + deltaX) + 'px';
      brush.style.top = (parseInt(brush.style.top) + deltaY ) + 'px';
    
      x = newX;
      y = newY;
      
      // 其他代码  
    });
    // 存在页面元素获取代码
    
  });
  
