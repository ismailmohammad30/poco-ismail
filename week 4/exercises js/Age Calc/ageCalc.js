function calcAge(birthYear){

    let currYear = new Date().getFullYear();
    let total = currYear - birthYear
     return  "your age in years (" + total + ") and your age in days (" + total * 365 +")" ;
     
}

let upThere = prompt ("what's is your birth year ? ");
document.write(calcAge(upThere));