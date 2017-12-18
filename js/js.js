/*
 * Created by Sun Wen on 2017/9/6.
 */
//浏览器判断

$(function(){
	var canvas = document.getElementById('canvas');
	canvas.width = 1400;
	canvas.height = 800
	//var context = canvas.getContext('2d');
	//context.beginPath();
	//context.moveTo(10,10);
	//context.lineTo(100,100);
	//context.lineTo(300,100);
	//context.lineTo(500,200);
	//context.lineTo(10,200);
	//context.lineTo(10,10);
	//context.lineWidth = '4';
	//context.strokeStyle = '#ee6534';
	//context.stroke()
	//context.fillStyle = '#eeade0';
	//context.fill();
	//context.closePath();
	//
	//context.beginPath();
	//context.moveTo(100,100);
	//context.lineTo(100,200);
	//context.lineTo(200,200);
	//context.lineTo(200,100);
	//context.lineTo(100,100);
	//context.lineWidth = '4';
	//context.strokeStyle = '#ee505e';
	//context.fillStyle = '#b6ff74';
	//context.fill()
	//context.closePath();

	//context.beginPath()
	//context.moveTo(100,200);
	//context.lineTo(400,200);
	//context.lineTo(400,100);
	//context.lineTo(600,250);
	//context.lineTo(400,400);
	//context.lineTo(400,300);
	//context.lineTo(100,300);
	//context.lineTo(100,200);
	//context.closePath();
	//context.lineWidth = '5';
	//context.strokeStyle = '#009dff';
	//context.fillStyle = '#4eff40';
	//context.fill();
	//context.stroke();
	//context.fillStyle = '#ff1b32';
	//context.fillRect(50,50,100,100)
	//var canvas = document.getElementById('canvas');
	//var context = canvas.getContext('2d');
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var linearGrad = context.createLinearGradient(0,0,0,canvas.height)
	linearGrad.addColorStop(0.0,"#000000")
	linearGrad.addColorStop(1.0,"#12296b")
	context.fillStyle = linearGrad;
	context.fillRect(0,0,canvas.width,canvas.height)
	for(var i = 0 ; i < 200 ; i++){
		var r = Math.random()*10;//10~20
		var R = Math.random()*10;
		var x = Math.random()*canvas.width;
		var y = Math.random()*canvas.height*0.55;
		var a = Math.random()*360
		DrawStar(context,R/2.0,R,x,y,a)
	}
	function DrawStar(ctx,r,R,x,y){
		ctx.beginPath();

		for(var i = 0 ; i < 5 ; i++){
			ctx.lineTo(Math.cos((18 + 72*i - a)/180*Math.PI)*R + x,-Math.sin((18 + 72*i - a)/180*Math.PI)*R + y);
			ctx.lineTo(Math.cos((54 + 72*i - a)/180*Math.PI)*r + x,-Math.sin((54 + 72*i - a)/180*Math.PI)*r + y);
		}
		ctx.closePath();
		ctx.strokeStyle = '#fdffdc';
		ctx.lineWidth = '3';
		ctx.lineJoin = 'round';
		ctx.fillStyle = '#eead12';
		ctx.stroke()
		ctx.fill()

	}

});



















