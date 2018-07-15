window.onload = function() {
    var selectCanvas = document.getElementById('canvas');
    var contextCanvas = selectCanvas.getContext('2d');

    //canvas
    var canvasWidth = selectCanvas.width;
    var canvasHeight = selectCanvas.Height;

    //creando las medidas de serpiente 
    var snakeWidth = 12;
    var snakeHeigth = 12;

    function drawSnake(x,y) {

        contextCanvas.fillStyle = '#FFF';
        contextCanvas.fillRect(x*snakeWidth , y*snakeHeigth, snakeWidth, snakeHeigth);

        contextCanvas.fillStyle = '#000';
        contextCanvas.strokeRect(x*snakeWidth, y*snakeHeigth, snakeWidth, snakeHeigth);
    }

    // drawSnake(4,5);

    //SnakeArray
    var len = 4;
    var snake = [];

    for (var i = len-1; i>=0; i--) {
        snake.push(
            {
                x:i,
                y:0
            }
        );
    }


function draw() {
    contextCanvas.clearRect(0, 0, canvasWidth, canvasHeight);
    for (var i=0; i<snake.length;i++){
        var x = snake[i].x;
        var y = snake[i].y;
        drawSnake(x,y);
    }

    //Snake Head
    var snakeX= snake[0].x;
    var snakeY= snake[0].y;

    //Quitar cola 
    snake.pop(); 

    //añadiendo la cabeza a una cabeza anterior
    snakeX++;
    var newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead); //agregar  cabezas con unshift
}

this.setInterval(draw, 60);






















};