window.onload = function() {
    //creando canvas
    var selectCanvas = document.getElementById('canvas');
    var contextCanvas = selectCanvas.getContext('2d');

    //Ancho y Altura del canvas
    var canvasWidth = selectCanvas.width;
    var canvasHeight = selectCanvas.height;

    //creando las medidas de serpiente 
    var snakeWidth = 12;
    var snakeHeigth = 12;

    //direccion de la serpiente
    var direction = 'right'; //direccion donde va dirigida la serpiente por default

    //añadiendo eventListener a la dirección para interactuar con el teclado
    document.addEventListener('keydown', changeDirection);

    function changeDirection(e) { 
        /*flecha izquierda = 37,
        flecha hacia arriba = 38,
        flecha hacia la derecha = 39,
        flecha hacia abajo = 40,
        */
        if(e.keyCode === 37 && direction != 'right') {
            direction = 'left';
        }else if(e.keyCode === 38 && direction != 'down') {
            direction = 'up';
        }else if(e.keyCode === 39 && direction != 'left') {
            direction = 'right';
        }else if(e.keyCode === 40 && direction != 'up'){
            direction = 'down';
        }
    }


    function drawSnake(x,y) {

        contextCanvas.fillStyle = '#5ece40';
        contextCanvas.fillRect(x*snakeWidth , y*snakeHeigth, snakeWidth, snakeHeigth);

        contextCanvas.fillStyle = '#000';
        contextCanvas.strokeRect(x*snakeWidth, y*snakeHeigth, snakeWidth, snakeHeigth);
    }

    // drawSnake(4,5);

    //Snake Array
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

    //Comida serpiente
    function drawFood(x,y){
        contextCanvas.fillStyle = '#e00b0b';
        contextCanvas.fillRect(x*snakeWidth, y*snakeHeigth, snakeWidth, snakeHeigth);
    
        contextCanvas.fillStyle = '#000';
        contextCanvas.strokeRect(x*snakeWidth, y*snakeHeigth, snakeWidth, snakeHeigth);
    }

    //Creando objeto de la comida
    food = {
        x: Math.round(Math.random()* (canvasWidth / snakeWidth)+1),
        y: Math.round(Math.random()*(canvasHeight / canvasWidth)+1)
    }



    function draw() {
        contextCanvas.clearRect(0, 0, canvasWidth, canvasHeight);
        for (var i=0; i<snake.length; i++){
            var x = snake[i].x;
            var y = snake[i].y;
            drawSnake(x,y);
        }

        //Pintando la comida
        drawFood(food.x, food.y);

    //Snake Head
    var snakeX= snake[0].x;
    var snakeY= snake[0].y;

    //Quitar cola 
    snake.pop(); 

    //condicionales para los movimientos
    if (direction === 'left') snakeX--;
    else if (direction === 'up') snakeY--;
    else if (direction === 'right') snakeX++;
    else if (direction === 'down') snakeY++;



    if(snakeX == food.x && snakeY == food.y) {
        
    }

    //añadiendo la cabeza a una cabeza anterior
    //snakeX++;
    var newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead); //agregar  cabezas con unshift
}

//movimiento de la serpiente
this.setInterval(draw, 80);






















};