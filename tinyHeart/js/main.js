var can1;
var can2;

var ctx1;//对应场景
var ctx2;

var canWidth;
var canHeight;

var lastTime;//上一贞
var deltaTime;//两镇间隔时间差

var bgPic= new Image();//定义背景的类

var ane;//定义海藻的类
	
var fruit;//定义水果，在到下面定义动态

/**var mom;**/

var mx;
var my;

document.body.onload = game;/*body加载完之后执行game*/
function game()
{
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
	}
	
function init()
{
	//获得canvas context
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext('2d');
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic.src="./src/background.jpg";
	
	canWidth = can1.width;
	canHeight= can1.height;
	
	ane=new aneObj();//定义并初始化
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();//再到下面定义动画循环和绘制水果
	
	/**mom = new momObj();
	mom.init();**/

	mx=canWidth*0.5;
	my=canHeight*0.5;
	
}
function gameloop()
{
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now - lastTime;
	lastTime=now;
	//console.log(deltaTime);
	
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	
	/**ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();**/
}
function onMouseMove(e) 
{
	if (e.offSetX||e.layerX)
	{
		mx=e.offSetX==undefined ?e.layerX:e.offSetX;
		my=e.offSetY==undefined ?e.layerY:e.offSetY;
		console.log(mx);
	}
}