let emojisArray=["😂","😁","😐","😒","😴","🤩","😶‍🌫️","😎","😅","🫡","😊","😉","😋","😗","🤔","🤨","🙄","🤐","😏","😮","🥱","🙃","😕","🫠"]

let emoji=document.querySelector('.emoji');

emoji.addEventListener("mouseover",()=>{
    emoji.innerHTML=emojisArray[Math.floor(emojisArray.length*Math.random())]
})