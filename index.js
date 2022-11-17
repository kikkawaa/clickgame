let correct=Math.floor(Math.random()*3)+1;
let gametext=document.getElementById("gametext");
let ans;


document.getElementById("B1").addEventListener("click", function () {
    ans=1;
    document.body.style.backgroundColor = "rgb(231, 41, 41)";

    judgment(ans);
   
});

document.getElementById("B2").addEventListener("click", function () {
    ans=2;
    document.body.style.backgroundColor = "rgb(88, 21, 133)";
    judgment(ans);
});

document.getElementById("B3").addEventListener("click", function () {
    ans=3;
    document.body.style.backgroundColor = "rgb(34, 200, 188)";
    judgment(ans);
});
console.log(ans);
console.log(correct);

function judgment(num){
    if(correct==num){
        gametext.textContent="Gameclear";
        document.getElementById("B1").disabled=true;
        document.getElementById("B2").disabled=true;
        document.getElementById("B3").disabled=true;
    }
       
    
}
