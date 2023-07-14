let section = document.querySelector("section");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let btn = document.querySelector("button");
let quotes = document.querySelector(".quotes");

h1.style.cssText = "font-weight:bold;font-family:Impact;font-size:3rem;margin:0;";
btn.style.cssText = "background-color:blue;padding:1rem 3rem;outline:none;border:none;color:#fff;"


let quotesContainer = [`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,`“You only live once, but if you do it right, once is enough.”
― Mae West`]


section.style.cssText = "text-align:center;"

btn.onclick = ()=>{
  
    quotes.innerHTML = shuffle(quotesContainer);

    
}

// make shuffled array every time on click
function shuffle(array){
    let shuffledArray = [];//to store new shuffled array
    let usedIndex = []//to store the random number and to make sure it is not repeated
    let i = 0;
    

    while( i < array.length){

        let random = Math.floor(Math.random()* array.length);//put it here to generate random number in loop
        
        if(!usedIndex.includes(array[random])){//if the usedindex array is not including the random number ..push the random element in the new array
            shuffledArray.push(array[random])
            usedIndex.push(random)
        }
        i++
    }
    return shuffledArray
}
