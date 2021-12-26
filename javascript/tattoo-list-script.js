//For tattoo list
const btn = document.getElementById('btnAddIdea'); //retrieves button btnAddIdea from id

//Function to add elements to list
btn.onclick = function createListlement() {
    const userInput = document.getElementById('input-tattoo-ideas').value; //vaulue of data
    const list = document.querySelector('ul'); //retrieves ul

    //Validation: make sure the user has entered input
    if(userInput != '') {
        let liElement = document.createElement('li'); //creates li element (list item)
         //sets list element to user's input and creates div to serve as delete button for li element
        liElement.innerHTML = `${userInput}<button id="delete-item">Delete</button>`;
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

//Display example image when hovering over it 
//Gets image element from html
let img = document.getElementById('tattoo-example-image');

//When calling (on mouseover on thumnbnail) this function in html document, assign the above
//retrived image an src value of the first image of tattoo examples
function showImgOne() {
    img.src = 'bilder/pikachutattoo.jpg';
}

//When calling (on mouseover on thumnbnail) this function in html document, assign the above
//retrived image an src value of the second image of tattoo examples
function showImgTwo() {
    img.src = 'bilder/tumblr_oc2mfkv2XS1re71vio1_1280.png';
}

//When calling (on mouseover on thumnbnail) this function in html document, assign the above
//retrived image an src value of the third image of tattoo examples
function showImgThree() {
    img.src = 'bilder/d404922b24e2803a7dbd0a1cac86d6d9.jpg';
}

//When calling this function (on mouseleave), make src value empty
//(no image to show when none is hoverded over)
function noImg() {
    img.src = '';
} 
