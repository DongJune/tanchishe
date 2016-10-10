$(function(){
	var descriton='you'
	var douzi
	var x;
	var y;
	var t
	for (var i = 0; i < 15 ;i++) {
		for (var j = 0; j < 15; j++) {
			$("<div>")
				.delay(j*100)
				.addClass("gezi")
				.attr("id",i+"-"+j)
				.appendTo(".screen")
		};
	}
 var she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
 function fangdiv(x,y){
 		return $("#"+x+"-"+y)
 }
	 for (var i = 0; i < she.length; i++) {
 	 	fangdiv(she[i].x,she[i].y).addClass('shen')
 };
fangdiv(she[she.length-1].x,she[she.length-1].y).addClass('she')
function fangshiwu(){
 x=Math.floor(Math.random()*14)
y=Math.floor(Math.random()*14)
douzi=$('#'+x+'-'+y)
douzi.addClass('food')
for (var i = 0; i < she.length; i++) {
	if (x==she[i].x&&y==she[i].y) {
		 x=Math.floor(Math.random()*14)
         y=Math.floor(Math.random()*14)
		douzi.removeClass('food')
		douzi=$('#'+x+'-'+y)
        douzi.addClass('food')
	};
};
}
fangshiwu()
 function move(){
 	var jiutou=she[she.length-1]
 	if (descriton=='you') {var xintou={x:jiutou.x,y:jiutou.y+1}

 };
    if (descriton=='zuo') {var xintou={x:jiutou.x,y:jiutou.y-1}};
    if (descriton=='shang') {var xintou={x:jiutou.x-1,y:jiutou.y}};
    if (descriton=='xia') {var xintou={x:jiutou.x+1,y:jiutou.y}};
	 for (var i = 0; i < she.length; i++) {
	if (xintou.x==she[i].x&&xintou.y==she[i].y) {
		$(".alert-box").delay(1000).addClass("alert-inner-top")
		$(".alert-content").text("自己撞到自己了！")
		clearInterval(t)
	return;
};
}
	 fangdiv(she[she.length-1].x,she[she.length-1].y).removeClass('she')
fangdiv(she[she.length-1].x,she[she.length-1].y).addClass('shen')
she.push(xintou)

if (x==xintou.x&&y==xintou.y) {
	douzi.removeClass('food')
   fangshiwu()
}else{
	var weiba=she.shift()
	fangdiv(weiba.x,weiba.y).removeClass('shen')
}
	fangdiv(xintou.x,xintou.y).addClass('she')
	if (xintou.y>14||xintou.x>14||xintou.y<0||xintou.x<0) {
		clearInterval(t)
		$(".alert-content").text("很遗憾！游戏结束了")
		$(".alert-box").delay(1000).addClass("alert-inner-top")
    };
 }

$(document).on('keydown',false)
$(document).on('keydown',function(e){
var anniu={37:'zuo',38:'shang',39:'you',40:'xia'}
var anniu1={'zuo':37,'shang':38,'you':39,'xia':40}
if (Math.abs(anniu1[descriton]-e.keyCode)==2) {return};
return descriton=anniu[e.keyCode]
})
$('.lis3').click(function(){
			 for (var i = 0; i < she.length; i++) {
 	 	fangdiv(she[i].x,she[i].y).removeClass('shen')
 };
 fangdiv(she[she.length-1].x,she[she.length-1].y).removeClass('she')
      descriton='you'
	she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}]
		 for (var i = 0; i < she.length; i++) {
 	 	fangdiv(she[i].x,she[i].y).addClass('shen')
 };
	t=setInterval(move,200)
})
	$(".icon-box").on('mouseenter',false)
	$(".icon-box").on('mouseenter',function(){
		$(this).find("li").addClass("lis-state")
		$(this).addClass("stop")

	})
	$(".icon-box").on('mouseleave',false)
	$(".icon-box").on('mouseleave',function(){
		$(this).find("li").removeClass("lis-state")
		$(this).removeClass("stop")

	})
	$(".lis1").on("click",false)
	$(".lis1").on("click",function(){
			$('.inner').addClass("inner-bottom")
		$(".loding-waiting").find("div").addClass("load").delay(3000).queue(function () {
			$(".loding").remove()
			t=setInterval(move,200)
			$(".lis1").off("click")
			$(this).dequeue()
		})
		
	})
	$(".lis2").on("click",function(){
		$('.regular').addClass("regular-bottom")
	})
	$(".close").on("click",function(){
		$('.regular').removeClass("regular-bottom")
	})
	$(".yes").click(function () {
		$(".alert-box").removeClass("alert-inner-top")
	})
	$(".no").click(function () {
		$(".alert-box").removeClass("alert-inner-top")
	})
	$(".lis4").click(function () {
		$(this).toggleClass("stop")
		if ($(this).hasClass("stop")){
			$(this).text("游戏开始")
			clearInterval(t)	
		}else {
			$(this).text("游戏暂停")
			t=setInterval(move,200)
		}
		
	})
})
