const inputBox=document.getElementById("input")
const lista=document.getElementById("list")

function addTask()
{
    if(inputBox.value === '')
    {
        alert("You haven't written anything Please write");
        
    }
    else
    {
        let le=document.createElement("li")
        le.innerHTML=inputBox.value;
        lista.appendChild(le);
        let sp=document.createElement("span");
        sp.innerHTML="\u00d7";
        le.appendChild(sp);
    }
    inputBox.value="";
    savetask();
}

lista.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
        savetask();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savetask();
    }
},false);
function showtask()
{
    lista.innerHTML=localStorage.getItem("data");
}
showtask();


function savetask()
{
    localStorage.setItem("data",lista.innerHTML)
}