$(".gallery img").hover(function(){

    // 鼠标进入事件
  
    var $img = $(this);
    var title = $img.attr("data-title");
  
    if(title){
      var $p = $("<p>"+title+"</p>");
      $img.after($p);
      $p.hide().slideDown(); 
    }
  
  }, function(){
  
    // 鼠标离开事件
  
    $("p").slideUp(function(){
      $(this).remove();
    });
  
  });
  