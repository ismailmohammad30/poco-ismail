var person1 = {
    numberOfchildren: 3,
    partnerName : "Lara",
    jobs   : "an Engineer",
    cites  : "zurich" ,
    tellFortune : function() {
      return  "You will be " +this.jobs + " in " + this.cites + " married to " + this.partnerName + " with "
       +this.numberOfchildren + " kids ";
    }
  };
  document.write(person1.tellFortune());
  //////////////////////
  
  var person2 = {
    numberOfchildren: 4,
    partnerName : "Sara",
    jobs   : "a Teacher",
    cites  : "Rome" ,
    tellFortune : function() {
      return  "You will be " +this.jobs + " in " + this.cites + " married to " + this.partnerName + " with "
       +this.numberOfchildren + " kids ";
    }
  };
  console.log(person2.tellFortune());
  ///////////////////////////
  
  var person3 = {
    numberOfchildren: 2,
    partnerName : "Yara",
    jobs   : "a Doctor",
    cites  : "Paris" ,
    tellFortune : function() {
      return  "You will be " +this.jobs + " in " + this.cites + " married to " + this.partnerName + " with "
       +this.numberOfchildren + " kids ";
    }
  };
  console.log(person3.tellFortune());
