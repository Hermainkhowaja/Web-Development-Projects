const api_url = "https://quotes-api-self.vercel.app/quote";
const qoute = document.getElementById("qoute");
const author = document.getElementById("author");

async function getQoute(url) {
    const response = await fetch(url);
    var data = await response.json();
   

    qoute.innerHTML = data.quote;
    author.innerHTML = data.author;
    
}
getQoute(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML + "----by " + author.innerHTML, "tweet Window" , "width=600, height=300");
}









// fetch('https://quotes-api-self.vercel.app/quote')
//   .then(response => response.json())
//   .then(data => {
//     // Handle the retrieved quote
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors
//     console.error(error);
//   });