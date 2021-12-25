//For tattoo list
const btn = document.getElementById('btnAddIdea'); //retrieves button btnAddIdea from id

//Function to add elements to list
btn.onclick = function() {
    const userInput = document.getElementById('input-tattoo-ideas').value; //vaulue of data
    const list = document.querySelector('ul'); //retrieves ul

    //Validation: make sure the user has entered input
    if(userInput != '') {
        let liElement = document.createElement('li'); //creates li element (list item)
         //sets list element to user's input and creates div to serve as delete button for li element
        liElement.innerHTML = `${userInput}<div id="delete-item">Delete</div>`;
        list.appendChild(liElement); //adding element to list
    }   

    //If no input, tell the user to enter something
    else {
        alert("Enter something cool in the box!")
    }
    }

//Func to remove added ideas
const tattooIdeaListClick = document.getElementById('tattoo-list')

//Listening for click event. When occurs, call function removeIdea 
//(to remove list item)
tattooIdeaListClick.addEventListener('click', RemoveIdea);


//func as stated above 
function RemoveIdea(e) {
    //tragets parent node of list item
    let removeLi = e.target.parentNode;

    //gets li element in list of tattoos, removes this
    //by using removeChild method
    let tattooList = document.getElementById('tattoo-list');
    tattooList.removeChild(removeLi);
}