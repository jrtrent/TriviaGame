$("#Start").on ('click', function(){
            $("#Start").remove()
            timer = setInterval(game.time, 1000)
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

    
        var game = {
            rightAnswers: 0,
            wrongAnswers: 0,
            unAnswered: 0,
            time: 10,
        };
            function done(){
                game.time--;
                $("#counter").append(game.time);
                 if (game.time<=0){
                     console.log(no.time)
                } else {
                    game.over();
                }
            }

             function over(){
                    $.each($('input[name="questions-0]":checked'), function() {
                        if ($(this).val()==question[0].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }  
                });
                    $.each($('input[name="questions-1]":checked'), function(){
                        if ($(this).val()==question[1].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }   
                });
                    $.each($('input[name="questions-2]":checked'),
                    function(){
                        if ($(this).val()==question[0].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }    
                });
                    $.each($('input[name="questions-3]":checked'),
                    function(){
                        if($(this).val()==question[0].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }  
                });
                    $.each($('input[name="questions-4]":checked'),
                    function(){
                        if($(this).val()==question[4].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        } 
                });
                    $.each($('input[name="questions-5]":checked'),
                    function(){
                        if($(this).val()==question[5].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }    
                });
                    $.each($('input[name="questions-6]":checked'),
                    function(){
                        if($(this).val()==question[6].correctAnswer)
                        { game.rightAnswers++;
                        } else {
                            game.wrongAnswer++;
                        }    
                });

                this.answered();
                function answered(){
                    clearInterval(timer);
                    $(".container").append("Right Answers:" + this.wrongAnswer);
                    $(".container").append("Right Answers:" + this.wrongAnswer);
                    $(".container").append("NotAnswered:" + questions.length-(this.rightAnswer_this.wrongAnswer));  
                }
            }
    

    

        
    

        
    
    
    


  
    

  
