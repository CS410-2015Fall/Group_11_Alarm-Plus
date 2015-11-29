describe("A suite", function() {
    var cards = [{
        title: 'Swipe down to clear the card',
        equation: '5 + x = 15',
        answer: 10, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '5x + 2 = 12',
        answer: 2, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: 'x + 6 = 13',
        answer: 7, //answer
        choices: [2, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '8 - x = 2',
        answer: 6, //answer
        choices: [6, 7, 9, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '9/x = 3',
        answer: 3, //answer
        choices: [2, 7, 3, 10],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '22 + 222 = X',
        answer: 244, //answer
        choices: [22222, 4444, 244, 2424],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '333/3 = X',
        answer: 111, //answer
        choices: [333, 3, 100, 111],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '1000 + 1000 = X',
        answer: 2000, //answer
        choices: [1000000, 10001000, 2000, 1100],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '50 x 50 = X',
        answer: 2500, //answer
        choices: [2500, 5050, 25000, 5000],
        rank: 0.5 - Math.random()
    }, {
        title: 'Swipe down to clear the card',
        equation: '50 + 150 = X',
        answer: 200, //answer
        choices: [50150, 200, 100, 5150],
        rank: 0.5 - Math.random()
    }];


    it("Check cards", function() {
        expect(cards[0].title).toBe('Swipe down to clear the card');
        expect(cards[0].equation).toBe('5 + x = 15');
        expect(cards[0].answer).toBe(10);
       
    });
         
         


});
