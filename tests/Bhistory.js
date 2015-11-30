describe("History suite", function() {
         var cards = [{
                      title: 'Swipe down to clear the card',
                      histq: 'Which year the Second World War end?',
                      answer: 1945, //answer
                      choices: [1945, 1939, 1918, 1914],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'How many provinces are there in Canada?',
                      answer: 10, //answer
                      choices: [50, 10, 9, 11],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Who was the first Prime Minister of Canada?',
                      answer: "John A. Macdonald", //answer
                      choices: ["John A. Macdonald", "Pierre Trudeau", "Paul Martin", "Brian Mulroney"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Who designed the current flag of Canada?',
                      answer: "George Stanley", //answer
                      choices: ["King George V", "William Lyon Mackenzie King", "George Stanley", "John Cabot"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Which is the largest Great Lake?',
                      answer: "Lake Superior", //answer
                      choices: ["Lake Erie", "Lake Huron", "Lake Ontario", "Lake Superior"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'How many teams were there when the NHL was founded?',
                      answer: "6", //answer
                      choices: ["5", "6", "7", "12"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Which year did World War I end?',
                      answer: "1918", //answer
                      choices: ["1944", "1918", "1914", "1980"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Which city is the capital of Canada?',
                      answer: "Ottawa", //answer
                      choices: ["Vancouver", "Toronto", "Ottawa", "Montreal"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'In Canada, which national holiday occurs on July 1st?',
                      answer: "Canada Day", //answer
                      choices: ["Family Day", "Labour Day", "Victoria Day", "Canada Day"],
                      rank: 0.5 - Math.random()
                      }, {
                      title: 'Swipe down to clear the card',
                      histq: 'Which city is the capital of BC?',
                      answer: "Victoria", //answer
                      choices: ["Victoria", "Vancouver", "Ottawa", "Edmonton"],
                      rank: 0.5 - Math.random()
                      }];
         it("Check cards", function() {
            expect(cards[0].title).toBe('Swipe down to clear the card');
            expect(cards[0].histq).toBe('Which year the Second World War end?');
            expect(cards[0].answer).toBe(1945);
            
            });
         });