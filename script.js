//selecting element to manipulate content
const inp = document.querySelector("#input-box");
const btn = document.querySelector("button");
const ul = document.querySelector("#list-container");

//btn eventlistener to append element in ul
btn.addEventListener("click" , ()=> {
    if(inp.value === "") {
        alert("You Must write something !");
    }
    else {
        let list  = document.createElement("li");
        list.classList.add("unchecked");
        list.innerHTML = inp.value ; 
        ul.appendChild(list);

        //adding cross element 
        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        list.appendChild(span);
        inp.value = "";
    }
    savData();
   
});

//checked class toggle eventlistener when li was clicked
ul.addEventListener("click" , (event)=>{
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        savData();
    }
    else if(event.target.tagName ===  "SPAN") {
        event.target.parentElement.remove();
        savData();

    }
} , false);

//storing data on browser while refreshing the tab
function  savData() {
    localStorage.setItem("data",ul.innerHTML);
}

//giving data back to users when comes backs

function showData() {
    ul.innerHTML = localStorage.getItem("data");
}

showData();


