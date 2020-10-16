let input =document.querySelector("input");
let dimensions = [];

input.addEventListener("change",getDimensions);
    function getDimensions(){
            console.log(this.files);
    for(let i = 0 ; i < this.files.length; i++){
        let file = this.files[i];
        let promise = new promise((resolve,reject) => {
        let src = window.URL.createObjectURL();
        let image = new image;
        image.src= src;
        image.onload = function(){
            resolve(image.width)
            // console.log(image.width);
            // console.log(image.height);
        }
      
        window.URL.revokeObjectURL(src);
    });
    dimensions.push(promise);
  }
  promise.all(dimensions).then(function(dims){
      console.log(dims)
  });
 }