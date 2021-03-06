describe("HardMath suite", function() {
         var cards = [{
                      title: 'Swipe down to clear the card',
                      hardm: 'I have a deck of cards, and I draw the King of Spades (without replacement), what is the probability that I will draw the King of hearts next?',
                      answer: 0.0196, //answer
                      choices: [0.0196, 0.0192, 1, 0],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: 'What is the probability that I roll 2 6s in row with a fair die?',
                      answer: 0.0278, //answer
                      choices: [0.167, 0.0278, 1, 0],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: 'If I flip a coin 4 times, what is the probability that I get 4 heads?',
                      answer: "0.0625", //answer
                      choices: ["0.025", "1", "0.25", "0.0625"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '2 + 2 x 2 - 2 = ?',
                      answer: "4", //answer
                      choices: ["2", "4", "6", "8"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '5 x 5 + 5 - 5 + 5 = ?',
                      answer: "30", //answer
                      choices: ["25", "40", "30", "50"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '6 x 6 + 6 - 6 x 6 = ?',
                      answer: "6", //answer
                      choices: ["0", "6", "12", "36"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: 'What is the probability of drawing a heart from a deck of cards?',
                      answer: "0.25", //answer
                      choices: ["0.40", "0.25", "0.20", "1"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '8 x 8 + 8 - 8 - 8 x 8 = ?',
                      answer: "0", //answer
                      choices: ["0", "1", "8", "64"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '1 x 1 + 1 - 1 + 1 x 1 + 1 = ?',
                      answer: "3", //answer
                      choices: ["1", "3", "2", "0"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      hardm: '5 + 5 x 5 + 5 - 5 = ?',
                      answer: "30", //answer
                      choices: ["10", "20", "30", "25"],
                      rank: 0.5 - Math.random()
                      }];
         it("Check cards", function() {
            expect(cards[0].title).toBe('Swipe down to clear the card');
            expect(cards[0].hardm).toBe('I have a deck of cards, and I draw the King of Spades (without replacement), what is the probability that I will draw the King of hearts next?');
            expect(cards[0].answer).toBe(0.0196);
            
            });

         });