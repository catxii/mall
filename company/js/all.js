// JavaScript Document

//www.hajjjc.com
//淮安立勤网络科技有限公司 yoyo制作


//语言选择
$(".head .top div.yuyan").mouseover(function(){
    $(".head .choose").show();
  })
.mouseout(function(){
	  $(".head .choose").hide();
});

//导航
$(".head .snav li#menu").mouseover(function(){
    $(".head .snav .second").slideDown();
  });
$(".head .snav").mouseleave(function(){
	$(".head .snav .second").slideUp();
});
$(".head .snav li.index").mouseleave(function(){
	$(".head .snav .second").slideUp();
});

//幻灯
jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"mouseover" });
//公告
jQuery("#Bar").slide({ mainCell:"ul",autoPlay:true,effect:"topLoop" });


$("a#example").fancybox({
				'overlayShow'	: true,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic',
			});

//services
$(".serBox").hover(
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeIn("slow");
     $(this).children(".pic1").animate({right: -110},400);
     $(this).children(".pic2").animate({left: 41},400);
     $(this).children(".txt1").animate({left: -240},400);
     $(this).children(".txt2").animate({right: 0},400);	 
	 }, 
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeOut("slow");
	 $(this).children(".pic1").animate({right:41},400);
     $(this).children(".pic2").animate({left: -110},400);
     $(this).children(".txt1").animate({left: 0},400);
     $(this).children(".txt2").animate({right: -240},400);	
  }
);


//客服展开效果
	$("#divQQbox").hover(
		function(){
			$(this).stop(true,false);
			$(this).animate({left:0},300);	
		},
		function(){
			$(this).animate({left:-276},149);	
		}
	)








