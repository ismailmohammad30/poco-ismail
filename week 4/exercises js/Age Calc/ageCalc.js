function calcAge(birthYear){
    "user strict";
    var year = new Date().getFullYear();
    var total = year - birthYear
     return  "your age in year " + total + " and your age with days " + total * 365 ;
     
}

var upThere = prompt ("what's is your birth year ? ");
document.write(calcAge(upThere));