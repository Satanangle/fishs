var fruitObj=function()
{
	this.alive=[];//是否活着，真或假
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();//定义完就要初始化
}
fruitObj.prototype.num=50;
fruitObj.prototype.init=function()//初始化
{
	for(var i=0;i<this.num;i++)
	{
		this.alive[i]=false;	
		this.x[i]= 0;
		this.y[i]= 0;
		this.spd[i]=Math.random()*0.01+0.005;//[0.005,0.015)
		//this.born(i);
		this.fruitType[i]= "";
	}
	this.orange.src="./src/fruit.png";
	this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function()/*定义完再给个定义*/
{
	for(var i=0; i<this.num;i++)
	{
	     //draw
		 //find ane,graw, fly up
		 if(this.alive[i])
		 {   
		 	 if(this.fruitType[i]=="blue")
			 {
			 var pic=this.blue;	
			 }
			  else
			   {
				var pic=this.orange;
			    }
			 if(this.l[i]<=20)
			 {
				this.l[i] += this.spd[i]*deltaTime; 
			 }
			 else
			 {
				  this.y[i]-=this.spd[i]*3*deltaTime;
			 }
			 ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
			 if(this.y[i]<10)
			 {
			   this.alive[i]=false;	 
			 }		 
		 }
		 
	}
}

fruitObj.prototype.born=function(i)
{
	var aneID=Math.floor(Math.random()*ane.num);	
	this.x[i]=ane.x[aneID];
	this.y[i]=canHeight-ane.len[aneID];//水果x y轴
	this.l[i]= 0;
	this.alive[i]=true;
	var ran =Math.random();
	if(ran < 0.3)
	{
	this.fruitType[i]= "blue";//or,blue
	}
	else
	{
	this.fruitType[i]= "orange";	
	}
}

function fruitMonitor()
{
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(fruit.alive[i]) num++;
	}
	if(num<15)
	{
		sendFruit();
		return;
	}
}
function sendFruit()
{
	var num=0;
	for(var i=0;i<fruit.num;i++)
	{
		if(!fruit.alive[i])
		{
		   fruit.born(i);
		   return;	
		}
	}
}

/*fruitObj.prototype.updata=function()//水果数量更新
{
	var num=0;
	for(var i=0;i<this.num;i++)
	{
	 	if(this.alive[i]) num++;//数量检测	
	}
		
}*/