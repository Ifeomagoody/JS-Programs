const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container")
function addTask(){
    if(inputbox.value === ''){       //if the input field is empty,
    alert("You must write something");   //tell/alert the user that they must enter something    
}
else{
    let li = document.createElement("li");     //sth is created here and stored in the "li" variable
    li.innerHTML = inputbox.value;             //the text added in the input field is stored here in the HTML document
    listcontainer.appendChild(li);             //the li will be displayed in the list container
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";                 //the code means the * icon so this code is added to any value entered that is meant for the HTML
    li.appendChild(span);                      //the span is displayed   
}
inputbox.value = "";
saveData()          //whenever the browser is refreshed or closed, the function saveData is called and it saves the updated content
}
listcontainer.addEventListener("click", function(e){   //when this container is clicked, it listens to check
    if(e.target.tagName === "LI"){                     //if it is the "LI" that was clicked,
        e.target.classList.toggle("checked");          //  it checks if checked class name has been added if it has been added, it removes it because of the classList.toggle that has been added
        saveData()                //when this task is checked or unchecked the data is also stored
    }
else if(e.target.tagName === "SPAN"){                  //if not, it moves to this line and checks if it is span that was clicked...if it is span, 
    e.target.parentElement.remove();                   //it deletes the parent element and the parent element is LI
    saveData()                     //when the task is deleted, the new task is saved here
}
},
false);
function saveData(){                  //this function saves data when the page is closed and opened or when the page is refreshed
    localStorage.setItem("data", listcontainer.innerHTML);  //it is "data" we want to store, whatever content is found on the listcontainer is stored on our browser
}
function showTask(){               //this function shows the data when the website is opened again
    listcontainer.innerHTML = localStorage.getItem("data");      //this gets all the items stored in the browser with the name data 
}
showTask();

