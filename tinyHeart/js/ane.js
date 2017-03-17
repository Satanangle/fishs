var aneObj=function()
{
	this.x=[];
	this.len=[];
}
aneObj.prototype.num=50;//数量
aneObj.prototype.init=function()//初始化 给一个返回的位置
{
	for(var i=0;i<this.num;i++)
	{
		this.x[i]=i*16+Math.random()*20;//
		this.len[i]=200+Math.random()*50;//海藻高度
	}
	//测试用console.log("a");//测试用
}
aneObj.prototype.draw=function()
{
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineWidth=20;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#3b154e";//海藻颜色
	for(var i=0;i<this.num;i++)
	{
		//beginPath,moveto,lineto,globalAlpha	透明度
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		ctx2.stroke();	
	}
	ctx2.restore();
}