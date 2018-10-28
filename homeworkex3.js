<canvas id="canvas3"></canvas>
const canvas = document.getElementById("canvas3");
  const context = canvas.getContext('2d');
  canvas.width = 1000;
  canvas.height = 563;
  const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
const back = new Image();
back.src = "https://images6.alphacoders.com/420/420340.jpg"
const badGuyImg = new Image();
badGuyImg.src = "https://i.pinimg.com/originals/21/df/75/21df759120a89bbf5e18adc94521aafe.gif"
const goodGuyImg = new Image();
goodGuyImg.src = "https://i.kym-cdn.com/photos/images/original/001/123/732/1e7.gif"
const hero = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
		width: 80,
		height: 100,
		image: goodGuyImg,
		draw: function(){
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function() {
              if(this.x < 0 || this.x > canvas.width - this.width+5){
              	this.xDelta = this.xDelta * -1}
		      if(this.y < 0 || this.y > canvas.height - this.height+5){
		      	this.yDelta = this.yDelta * -1}
                this.x = this.x + this.xDelta;
                this.y = this.y + this.yDelta;  
      }, 
	}
const badone = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for(let i = 0; i < count; i++){
          array[array.length] = {
            x: rand(canvasHeight-90),
            y: rand(canvasWidth-70),
            width: 70,
            height: 90,
            xDelta: 1.5, 
            yDelta: 1.5, 
            draw: function() {
              context.drawImage(badGuyImg, this.x, this.y, this.width, this.height)
            },
            update: function() { 
                            if(this.x < 0 || this.x > canvasWidth - this.width){
                            	this.xDelta *= -1}
		                    if(this.y < 0 || this.y > canvasHeight - this.height){
		                    	this.yDelta *= -1}
                             this.x += this.xDelta;
                             this.y += this.yDelta;
                            if (this.x < hero.x + hero.width && this.x + this.width > hero.x && this.y < hero.y + hero.height && 
       	                         this.height + this.y > hero.y){
                              //alert("Game Over");}
         }
       };  
     }  
     return array;
};
  const boxes = badone(rand(8),canvas.width,canvas.height);
    const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === rightKey){
        		hero.xDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === leftKey){
        		hero.xDelta = -5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.xDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === downKey){
        		hero.yDelta = 5;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === upKey){
        		hero.yDelta = -5;
        	}
        	if(hero.x + hero.width === canvas.width){
        		hero.xDelta = 0;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	hero.yDelta = 0;
            }, false);

const drawAll = function(array){  
 for(let i = 0; i < array.length; i = i+1){     
          badone(array[i].draw())       
        }         
  }; 
const updateAll =function(array1){
        for(let i = 0; i < array1.length; i++){
          badone(array1[i].update());    
        }          
      };
const loop = function() { 
  	context.drawImage(back, 0, 0, canvas.width, canvas.height)    
    drawAll(boxes);  
    updateAll(boxes);
    hero.draw();
    hero.update();                            
    requestAnimationFrame(loop);       
  }         
   loop();