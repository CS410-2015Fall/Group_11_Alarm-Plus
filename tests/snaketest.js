describe('alarmplus controllers', function() {

var BOARD_SIZE = 20;

    var DIRECTIONS = {
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

    var COLORS = {
      GAME_OVER: '#820303',
      FRUIT: '#0033CC',
      SNAKE_HEAD: '#FF3300',
      SNAKE_BODY: '#FF751A',
      BOARD: '#686868'
    };

    var snake = {
      direction: DIRECTIONS.LEFT,
      parts: [{
        x: -1,
        y: -1
      }]
    };

    var fruit = {
      x: -1,
      y: -1
    };

    var interval, tempDirection, isGameOver;

    var score = 0;

    var lengthmet = function() {
      return score == 3;
    };

    var boardCollision = function(part) {
      return part.x === BOARD_SIZE || part.x === -1 || part.y === BOARD_SIZE || part.y === -1;
    };

    var fruitCollision = function(part) {
      return part.x === fruit.x && part.y === fruit.y;
    };


    it("check snake setup", function() {
        expect(DIRECTIONS.LEFT).toBe(37);
        expect(DIRECTIONS.RIGHT).toBe(39);
        expect(DIRECTIONS.UP).toBe(38);
        expect(DIRECTIONS.DOWN).toBe(40);
        expect(snake.direction).toBe(37);
        expect(snake.parts.x).toBe(-1);
        expect(snake.parts.y).toBe(-1);
        expect(fruit.x).toBe(-1);
        expect(fruit.y).toBe(-1);
        expect(score).toBe(0);
    });

    it("check snake collision", function() {
    	var score = 3;
    	expect(lengthmet()).toBe(true);
    });
});