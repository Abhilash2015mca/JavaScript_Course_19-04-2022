let data=[
    {
        player:"Ronaldo",
        score:65
    },
    {
        player:"Messi",
        score:75
    }
]
const scoreBtn=document.getElementById("score-btn");
scoreBtn.addEventListener("click",function(){
    console.log(data[0].score);
})