let codes = document.getElementById("codes");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let result = document.getElementById("results")

add.onclick = ()=> {
    result.innerHTML = codes.value;
    localStorage.setItem("Results",codes.value)

}
window.onload = ()=>{
    codes.innerHTML= "";

}
remove.onclick = ()=>{
    result.innerHTML= "";

    
}