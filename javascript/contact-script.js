//Input check for contact file (has onclick event in contact.html)
function inputOkContact() {
    //If one or more boxes are empty (length of input is 0), display
    //an error message (gets box elements by id)
    
    if(document.getElementById("firstname" && "lastname" && "email" && "message").value.length == 0) {
        alert('Enter something in all boxes.');
    }
    //If all boxes have input, alert the user the message was sent
    else {
        alert('Your message was sent.');
    }
}