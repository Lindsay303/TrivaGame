$(document).ready();

$('#start').on('click', function(){
    game.start();
})

$(document).on('click', '#done', function(){
    game.done();
})

// Set of questions and answers 
var questions =[{
    question:"What is the highest point in Colorado?",
    answers:["Mount Massive  ", "Mount Elbert  ", "Longs Peak  ", "BestBudz Dispensary  "],
    correctAnswer:"Mount Elbert",
}, {    
    question:"Coloradans when compared to all other states, have the lowest rates of what?",
    answers:["Heart Failure  ", "Depression  ", "Obesity  ", "Brown Eyes  " ],
    correctAnswer:"Obesity",
}, {    
    question:"The Grand Mesa, located to the southeast of Grand Junction, is said to be the world's largest what?",
    answers:["Flat-topped mountain  ", "Discovery site of dinosaur bones  ", "Undergound secret lair  ", "Deposit of volcanic basalt  " ],
    correctAnswer:"Flat-topped mountain",
}, {    
    question:"The Colorado sliver boom was set off by the discovery of a major silver lode near what city in 1878?",
    answers:["Gold Hill  ", "Leadville  ", "Silverthorn  ", "Silverton  " ],
    correctAnswer:"Leadville",
}, {    
    question:"In Colorado, on November 6, 2012, voters voted to legalize the personal use of what?",
    answers:["Cordless hand mixers  ", "Flour containing gluten  ", "Blue-tooth earpieces  ", "Marijuana  " ],
    correctAnswer:"Marijuana",
}, {    
    question:"Nederland, CO is most famous for what festival?",
    answers:["Frozen Dead Guy Days  ", "Burning Man  ", "Coachella  ", "Woodstock  " ],
    correctAnswer:"Frozen Dead Guy Days",
}, {    
    question:"What is the longest continuous street in America?",
    answers:["Colfax Avenue  ", "Baseline Road  ", "Evans Avenue  ", "Colorado Street  " ],
    correctAnswer:"Colfax Avenue",
}, {    
    question: "Of the many things that are illegal in Boulder, CO, which of the following is actually illegal?",
    answers:["Petting a strangers bird  ", "Herding pigs  ", "Climbing rocks barefoot  ", "Drinking hot tea outside in August  " ],
    correctAnswer:"Herding pigs",
}, {    
    question:"Which popular American dish was trademarked by Louis Ballast of Denver’s ‘Humpty Dumpty Drive-In’ in 1935?",
    answers:["Hot Dog  ", "Ice Cream Shake  ", "Cheeseburger  ", "Onion Rings  " ],
    correctAnswer:"Cheeseburger",
}, {
    question:"Which US President signed a proclamation that admitted Colorado to the Union?",
    answers:["Ulysses S. Grant  ", "George W. Bush  ", "Rutherford Hayes  ", "James Garfield " ],
    correctAnswer:"Ulysses S. Grant",
}]

// Collect guesses
var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0){
            console.log("time is up");
            game.done();
        }
    },

    // Start the game
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subWrapper').prepend('<h2>Time Remaining: <span id = "counter">60</span> Seconds</h2>');
            $('#start').remove();
            for(var i = 0; i < questions.length; i++){
                $('#subWrapper').append('<h2>'+questions[i].question+'</h2>');
                for(var c = 0; c < questions[i].answers.length; c++){
                    $("#subWrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[c]+"'>"+questions[i].answers[c])
                }
            }
            $('#subWrapper').append('<br><button id="done">Done!</button>')
        },
    // End the game
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if ($(this).val() === questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if ($(this).val() === questions[1].correctAnswer){
                game.correct++;
                console.log("correct")
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if ($(this).val() == questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function() {
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function() {
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"),function() {
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"),function() {
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
        },
        result: function(){
            clearInterval(timer);
            $('#subWrapper h2').remove();

            $('#subWrapper').html("<h2>All Done!</h2>");
            $('#subWrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
            $('#subWrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");
            $('#subWrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }


        
}