let ul = document.querySelector("ul");
let input= document.querySelector("input");
let button = document.querySelector("button");
let array =[];
let errorMessage;

button.addEventListener("click",addNew);
input.addEventListener("keypress",check);
function check (event){
//13 = enter key
    if (event.keyCode === 13){
        addNew();
    }
}
function isInputValid(){
    if (input.value.trim() !=="" ){
        for (let i = 0; i <array.length; i++){
            if (array[i]== input.value){
                errorMessage ="this todo already in the list"
                return false
            }

        }
    return true;
    }
    return false;

}
function addNew(){
    if (isInputValid()){
        array.push (input.value)
        let li = document.createElement("li");
        let value = input.value;
        li.innerText = value;
        ul.appendChild(li);
        input.value = "";
        input.placeholder ="Enter your list";
        input.focus();
    }else{
        clearInput();
        alert(errorMessage)
    }
}

