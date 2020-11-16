//烛光效果
var mouse = {
	X: 0,
	Y: 0,
	CX: 0,
	CY: 0
},
block = {
	X: mouse.X,
	Y: mouse.Y,
	CX: mouse.CX,
	CY: mouse.CY
};
$('.show-box').on('mousemove', function(e) {
	mouse.X = (e.pageX - $(this).offset().left) - $('.show-box').width() / 2;
	mouse.Y = (e.pageY - $(this).offset().top) - $('.show-box').height() / 2
});
$('.show-box').on('mouseleave', function(e) {
	mouse.X = mouse.CX;
	mouse.Y = mouse.CY
});
setInterval(function() {
	block.CY += (mouse.Y - block.CY) / 12;
	block.CX += (mouse.X - block.CX) / 12;
	$('.show-box .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y + 'px, #FEFFFB, transparent)');
	$('.show-box').css('transform','scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) + 'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)')
}, 30);
$(document).ready(function(){
	$('.ws_images img').each(function(){
		var w=$(window).width();//图片最大宽度
		console.log(w);
		var h=$(window).height();//图片最大高度
		var width=$(this).width();//图片实际宽度
		console.log(width);
		var height=$(this).height();// 图片实际高度
		var ratio=0;//缩放比例
		//width.style.width='100%';
		if(width > w){
			ratio = w / width;   // 计算缩放比例
			$(this).css("width", w); // 设定实际显示宽度
			height = height * ratio;    // 计算等比例缩放后的高度
			$(this).css("height", height);  // 设定等比例缩放后的高度
		}

		if(height>h){
			ratio=h/height;
			$(this).css("height",h);
			width=width*ratio;
			$(this).css("width",width*ratio);
		}
	});
});

//联系方式
var tips = $('.tips');
$('.list li').hover(
	function() {
	  	$(this).find(tips).show(30);
	},function() {
	  	$(this).find(tips).hide();
	}
);
$('.list li a').click(function(){
	alert('内容待添加！感谢关注');
});

//导航栏
var navBar = true;
$('.menu-btn').click(function() {
	if (navBar) {
		$('.menu').slideDown(300);
	} else {
		$('.menu').slideUp(300);
	}
	navBar = !navBar;
});
if($(window).width()<768){
	$('.menu li').click(function() {
		$('.menu').slideUp(300);
	});
}

//GoTop
$(window).scroll(function() {
	$(window).scrollTop() > document.documentElement.clientHeight /2 ? $('#GoUp').fadeIn() : $('#GoUp').fadeOut();
	$('.menu-fixed').hide();
});
$('#GoUp').click(function () {
	$('html,body').stop().animate({
		scrollTop: 0
	}, 500);
});

var UnU = false;
$('.logo').on('click',function() {
	if(UnU) {
		play();
	} else {
		$('#audio').get(0).pause();
		$(this).css('animation','none');
	}
	UnU = !UnU;
});

$('.logo').css('animation','music 5s infinite linear');
var musicUrl='../img/e0e.mp3';
$('#audio').attr("src",musicUrl);
function play(){
	$('#audio').get(0).play();
	$('.logo').css('animation','music 5s infinite linear');
}

// 左键点击动画
$(function(){
	var a_idx = 0;
	jQuery(document).ready(function($) {
	    $('body').click(function(e){   
			var font = ['F','A','N','G','J','I','E','S','O','N','G'];
	        var $i = $('<span/>').text(font[a_idx]); //新建span标签
			a_idx = (a_idx + 1) % font.length;
	        var x = e.pageX, y = e.pageY;//获得鼠标点击的坐标
	        $i.css({
	            'z-index':99999,
	            'top':y-20,
	            'left':x,
	            'position':'absolute',
	            'color':'#12A3EA',
				'font-weight':'700',
				'font-family':'hyllh'
	        });//给生成的span标签加上样式
	        $('body').append($i);
	        $i.animate(
	            {'top':y-180,'opacity':0},
	            1500,
	            function(){
	            	$i.remove();
	            }
	        );//消失动画效果
	    });
	});
});
$('.show-box > h1,.show-box > h3,.show-box > p').addClass('animated fadeInUp');
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').addClass('animated fadeIn');	
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').attr('data-wow-duration','1s');	
$('.view-box').addClass('animated bounceInRight');
$('.moveup').addClass('animated fadeInUp');
var item = $('.flex-wrap > .flex-item');
for(var i=0;i<item.length;i++){
	item.eq(i).attr('data-wow-delay',(i / 10 )+'s');
}

$(window).load(function() {
	$('body').addClass('loaded');
	$('#loeder-wrapper').fadeOut(300);	
	setTimeout(function(){
		play()
	},5000);
});

//留言板

 