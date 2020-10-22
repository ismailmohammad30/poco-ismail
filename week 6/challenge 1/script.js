
    const input= document.getElementById("topic");

    const search= document.getElementById("search");

    const ul= document.querySelector(".list");

    const firstInfo= document.querySelector("h5");

    let result= [];

    search.addEventListener("click", getNews);
    
    

    function getNews(e){
        e.preventDefault();
        
        let topic = input.value;
        
        const apiKey="d3cc1b1aa7e0d75288d508450718102a";
       
        let url= `https://gnews.io/api/v4/search?q=${topic}&token=${apiKey}`

        fetch(url)
        .then(function (response) {        
        return response.json();
    })
        .then(function (data) {
            console.log(data.totalArticles);          


            console.log(data.articles[0].title);
             data.articles.forEach((article) => {
                firstInfo.textContent=`There are totally ${data.totalArticles} articles about this subject. You can find the first 10 articles below:`;
                let li= document.createElement("li");
                let a= document.createElement("a");
                let img= document.createElement("img");
                a.setAttribute("href", article.url);
                a.setAttribute("target", "_blank");
                a.textContent=article.title;
                li.appendChild(img);  
                li.appendChild(a);
                ul.appendChild(li);
                
                img.setAttribute("src", article.image);
                           
               
                 
             });           
      
        
    })
};
(function clear(){
   let li ="";

})()

    