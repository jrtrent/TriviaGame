$("#Start").on ('click', function(){
            $("#Start").remove()
            $("#end").append("<button>" + "Submit" + "</button>")
            for (var i = 0; i< questions.length; i++){
                $("#openpage").append("<div>"+ questions[i].question + "</div>");
                for (var x = 0; x < questions[i].choices.length; x++){
                    $("#openpage").append("<div>" + "<input type='radio' name='question-" +i+"' value='+ questions[i].choices[x] + ' name='dynradio'>" + questions[i].choices[x] +"</div>" +"<br>")
                }
            }
 });
        var questions = [{
                question: "What is the name of Doctor Who's home planet?",
                choices: ["Klom","Sigma","Gallifrey","Adipose"],
                correctAnswer: 3
            }, {
                question: "Which creature on the Doctor Who has a hindbrain?",
                choices: ["Sontarans","Ood","Dalek","Sisters of Plentitude"],
                correctAnswer: 2
            },  {
                question: "Whice of the Doctor's companions has to have their memory wiped clean?",
                choices: ["Sarah Jane", "Donna", "Mickey", "Jack"],
                correctAnswer: 3
            }, { 
                question: "Which volcano does Doctor Who and his companion watch explode?",
                choices: ["Mount Vesuvius","Mount St. Helen", "Mount Etna", "Mount Krakatau"],
                correctAnswer: 1
            },
                {
                    question: "What part of his body does the Doctor keep in a jar on the Tardis?",
                    choices: ["Foot","Hand","Ear","Nose"],
                    correctAnswer: 2
            },  {
                question: "In which century was Captain Jack born?",
                choices: ["51st","19th","12th","37th"],
                correctAnswer: 1
            }
        ];

        var intervalID;
        var clockRunning = false;
    
        var game = {
            rightAnswers: 0,
            wrongAnswers: 0,
            unAnswered: 0,
            counter: 120,
        };
            timer: (function(){
                $("#counter").append(game.counter);
                 if (!clockRunning) {
                    intervalId = setInterval(game.counter, 1000);
                    clockRunning = true;
                    game.counter--;
                } else {
                    console.log("no time");
                }
              }

        game: (function() {
            $.each($('input[name="questions-0]":checked'),
            function(){
                if($(this).val()==question[0].correctAnswer){
                    game.rightAnswers++;
                } else{
                    game.wrongAnswer++;
                }
                console.log(rightAnswers);
            });
        
    

    

        
    

        
    
    
    


  
    

  
