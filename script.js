const toPropercase=(value)=>{ return(value=value.trim().toLowerCase())};
let my =confirm("let's play rock,paper,scissor ");
if (my){
    while(my)
{ let plaYer=prompt("please enter rock,paper or scissor");
     
    if(plaYer)
    { plaYer=toPropercase(plaYer); 
        if(plaYer==="rock"||plaYer==="scissor"||plaYer==="paper")
        {
            let comP = Math.floor(Math.random()*3);
            console.log(comP)
            let possibles=["rock","paper","scissor"]
            let comPuter=possibles[comP]
            let reSult=comPuter===plaYer?"tie":
            comPuter==="scissor"&&plaYer==="paper"?`you ${plaYer}\ncomputer ${comPuter}\ncomputer wins`:
            comPuter==="paper"&&plaYer==="rock"?`you ${plaYer}\ncomputer ${comPuter}\ncomputer wins`:
            comPuter==="rock"&&plaYer==="scissor"?`you ${plaYer}\ncomputer ${comPuter}\ncomputer wins`:
            `you ${plaYer}\ncomputer ${comPuter}\nYou wins`;
            alert(reSult)
            let platAgain=confirm("can we play again");
            platAgain?location.reload():alert("thanks for playing game")
            break;
        }
        else{a=alert("not a rock,paper,scissor")
              continue;          
        }
    }  
    else{alert("your are changed your mind")
        break;
    }
}
}
 else{alert("its ok may be next time")}
