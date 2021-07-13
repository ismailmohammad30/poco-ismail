const books =[{
    bookName: 'A Promised Land',
    authorName : 'Barack Obama',
    price : '59,90 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/2414/9780241491515.jpg'
},
{
    bookName: 'The Life Lessons & Rules for success',
    authorName: 'The Rock',
    price: '10.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7902/9781790217229.jpg'
},
{
    bookName: 'The Butterfly Burden',
    authorName: ' Mahmoud Darwish',
    price: '18.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8522/9781852247881.jpg'
},
{
    bookName: 'The Life Lessons & Rules for success',
    authorName: 'The Rock',
    price: '10.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7902/9781790217229.jpg'
},
{
    bookName: 'The Butterfly Burden',
    authorName: ' Mahmoud Darwish',
    price: '18.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8522/9781852247881.jpg'
},
{
    bookName: 'The Life Lessons & Rules for success',
    authorName: 'The Rock',
    price: '10.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7902/9781790217229.jpg'
},
{
    bookName: 'The Butterfly Burden',
    authorName: ' Mahmoud Darwish',
    price: '18.22 USD',
    img:'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8522/9781852247881.jpg'
}
];
// console.log(books)
// document.querySelector('.bookOne').innerHTML = `
//         <h1>${books[0].bookName}</h1>
//         <img src="${books[0].img}" alt="">
//         <h2>${books[0].authorName}</h2>
//         <p>${books[0].price}</p>
//         <button onclick ="addToList(this)">buy</button>
// `
// document.querySelector('.bookTwo').innerHTML = `
//         <h1>${books[1].bookName}</h1>
//         <img src="${books[1].img}" alt="">
//         <h2>${books[1].authorName}</h2>
//         <p>${books[1].price}</p>
//         <button onclick ="addToList(this)">buy</button>
// `
// document.querySelector('.book3').innerHTML = `
//         <h1>${books[2].bookName}</h1>
//         <img src="${books[2].img}" alt="">
//         <h2>${books[2].authorName}</h2>
//         <p>${books[2].price}</p>
//         <button onclick ="addToList(this)">buy</button>
// `

function addToList(element) {
    element.hidden = true;
    alert('thanks for buying')

    
}

let results = ''
for(let i = 0; i < books.length; i++){
    results += `<div>`
    results += `<h1>${books[i].bookName}</h1>`
    results+=`<img src="${books[i].img}" alt="">`
    results+=`<h2>${books[i].authorName}</h2>`
    results+=`<p>${books[i].price}</p>`
    results+= `<button onclick ="addToList(this)">buy</button>`
    results+=`</div>`
}
document.querySelector('#demo').innerHTML= results