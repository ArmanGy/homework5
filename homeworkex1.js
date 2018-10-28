//ex1
<canvas id = "canvas1"></canvas>
    const rand = function(num) {
        return Math.floor(Math.random() * num) + 1;
    }
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");
    const createBoxes = function(count, canvasWidth, canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;    
        const colorArray = ['blue', 'green', 'orange', "yellow", "grey", "black", "red", "purple"];
        const arr = [];
        for(let i = 0; i < count; i++){   
            arr[i] = {
               x: rand(canvas.width-40),
               y: rand(canvas.height-40),
               width: 40,
               height: 40,
               xDelta: 1, 
               yDelta: 1, 
               color: colorArray[rand(colorArray.length)-1],
               draw: function() {
                 context.fillStyle = this.color;
                 context.fillRect(this.x, this.y, this.width, this.height);
          }
         }
        } return arr;
    };
    const boxes = createBoxes(10, 300, 300);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].draw();
    };