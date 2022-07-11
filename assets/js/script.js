//getting all required elements
const start_btn = document.querySelector(".start_btn nutton");
const info_box = document.querySelector("info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart")
const quiz_box = info_box.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec")
const timeline = quiz_box.querySelector("header .time_line")

const option_list = document.queryselector(".option_list");

//if start quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//if exit button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
}

//if continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    showQuestions(0);
    ques_counter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart")
const quit_quiz = result_box.querySelector(".buttons .quit")

//if next button clicked
next_btn.onclick = ()=>{
    if (que_count < questions.length -1){
         que_count++;
         que_numb++;
         showQuestions(que_count);
         queCounter(que_numb);
         clearInterval(counter);
         stratTimer(timeValue);
         clearInterval(counterLine);
         startTimerLine(widthValue);
         next_btn.style.display = "block";
    }else{
        console.log("questions completed");
    };
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll("option");
    for (let i=0; i < option.length; i++){
        option_list[i].setAttribute("onclick", "optionSelected(this)")
    }
}


let tickIcon = '<div class="icon tick><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon crross><i class="fas fa-times"></i></div>'

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    userScore += 1;
    console.log(userScore);
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct"); 
        answer.insertAdjacementHTML("beforeend", tickIcon);  
    }else{
        answer.classList.add("incorrect")
        console.log("Answer is wrong");
        answer.insertAdjacementHTML("beforeend", crossIcon);  
    
        //if answers is incorrect then automatically selected the correct anser
        for (let i = 0; i < option.length; i++){
           if(option_list.children[i],textContent == correctAns){
               option_list.children[i].setAttribute("onclick", "option correct");
               option_list.children[i].insertAdjacementHTML("beforeend", tickIcon);
            }
        }

    }
    
    //once user selected disabled all options
    for (let i=o; i < allOptions; i++){
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display = "block";
}


function showResultBox();
info_box.classList.remove("activeInfo");
quiz_box.classList.remove("activeQuiz");
result_box.classList.add("activeResult");
const scoreText = result_box.querySelector("score_text");
if(userScore > 3){} 

function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0){
            clearInterval(counter);
            timeCount.textContent = 00;
        }
    }

    function startTimer(time){
        counterLine = setInterval(timer, 29)
        function timer(){
            time += 1;
            timeline.style.width = time + "px";
            if(time > 549){
                clearInterval(counterLine)
            }
        }
    }





function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' + questions.length + '</p>questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
