//ex2
<canvas id = "canvas2"></canvas>
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
    }
    const canvas = document.getElementById("canvas2");
    const context = canvas.getContext("2d");
    const createBoxes = function(count, canvasWidth, canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        const arr = [];
        const colorArray = ['blue', 'green', 'orange', "yellow", "purple", "black", "grey", "red", "white"];        
        for(let i = 0; i < count; i++){  
            let col = rand(colorArray.length);
            arr[i] = {
                x: rand(canvas.width - 30),
                y: rand(canvas.height - 30),
                width: 30,
                height: 30,
                xDelta: 5, 
                yDelta: 5, 
                color: colorArray[col], 
                draw: function(){
                    context.fillStyle = this.color;
                    context.fillRect(this.x, this.y, this.width, this.height);
                },
                update: function(){
                    this.x += this.xDelta;
                    this.y += this.yDelta;
                    if(this.x <= 0 || this.x + this.width >= canvas.width){
                        this.xDelta *= -1;
                        col += 1;
                    }
                    if(this.y <= 0 || this.y + this.height >= canvas.width){
                        this.yDelta *= -1;
                        col += 1;
                    }
                    if(col >= colorArray.length){
                        col = 0;
                    }
                    this.color = colorArray[col];
          } 
         }
        }
        return arr;
    };
    const boxes = createBoxes(15, 500, 500);
    const draw = function(){
        context.fillStyle = "";
        context.fillRect(0,0, canvas.width, canvas.height);
        for(let i = 0; i < boxes.length; i++){
            boxes[i].draw();
     }
    };
    const update = function(){
        for(let i = 0; i < boxes.length; i++){
            boxes[i].update();
     }
    };
    const loop = function(){
        draw();
        update();
        requestAnimationFrame(loop);
    }
    loop();