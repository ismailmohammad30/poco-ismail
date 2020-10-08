let rightAnswerList = ["c","d","a","c","c"];
​
var userAnswerList = [];
​
let counterTrue = 0;
let counterFalse = 0;
​
function compare(){
​
    for(let i = 0; i < rightAnswerList.length; i++)
    {
        if(userAnswerList[i] == rightAnswerList[i])
        {
            counterTrue++;
        }
        else
        {
            counterFalse++;
        }
    }
}
​
function feedback(){
    let message ="";
    switch(counterTrue){
        case "0":
            message = "You have to study more.";
        break;
        case "1":
            message = "You have to study a little bit more.";
        break;
        case "2":
            message = "It will be better.";
        break;
        case "3":
            message = "You are on a good way.";
        break;
        case "4":
            message = "Good! You did well.";
        break;
        case "5":
            message = "Congrats! You are a genius.";
    }
    var h3 = document.getElementById("demo");
    h3.innerHTML= message;
}
​
​
function nextQuestion(){
​
    //Check radio button
    let firstAnswer = document.getElementById('a').checked;
    let secondAnswer = document.getElementById('b').checked;
    let thirdAnswer = document.getElementById('c').checked;
    let fourthAnswer = document.getElementById('d').checked;
​
    if(firstAnswer == false || secondAnswer == false || 
        thirdAnswer == false || fourthAnswer == false)
        {
            prompt("You can not continue without answering the question.")
        }
        else{
​
            if (firstAnswer)
            {
                userAnswerList.push("a");
            }
​
            if (secondAnswer)
            {
                userAnswerList.push("b");
            }
​
             if (thirdAnswer)
            {
                userAnswerList.push("c");
            }
​
            if  (fourthAnswer)
            {
                userAnswerList.push("d");
            }
​
            //go to next question
        }
}
​
function results(){
​
    compare();
​
    feedback();
}