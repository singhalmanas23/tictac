let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-Btn ");
let newGameBtn=document.querySelector("#new-Btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let bari=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>{
    bari=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("You clicked it.");
        if(bari)
        {
            box.innerText="O";
            box.style.color="blue";
            bari=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            bari=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabledBoxes=()=>
{
    for(box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>
{
    msg.innerText = `Congratulations 🥳 \n The Winner Is : ${winner}`;

    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; 
        }
    }
    return true; 
}
const checkWinner=()=>{
    for(let pattern of winpatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
                console.log("congratulations !! we get our winner !!\n The Winner is : ",pos1);
                showWinner(pos1);
            }
           
        }
    }
    if (checkDraw()) {
                
        msg.innerText = "It's a draw!🙁\n Try New 👇🏻";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);