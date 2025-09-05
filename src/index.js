/** Button setup */
const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const blogButton = document.getElementById("blogButton");
const resumeButton = document.getElementById("resumeButton");
const contactButton = document.getElementById("contactButton");

// Default to displaying home
var activeButton = homeButton;
activateButton(activeButton);

homeButton.addEventListener("click", function(_event){radioButtonToggle(this);});
aboutButton.addEventListener("click", function(_event){radioButtonToggle(this);});
blogButton.addEventListener("click", function(_event){radioButtonToggle(this);});
resumeButton.addEventListener("click", function(_event){radioButtonToggle(this);});
contactButton.addEventListener("click", function(_event){radioButtonToggle(this);});

/**
 * Toggle a button to it's active state and untoggle the previously active button.
 * @param {Object} newActiveButton 
 */
function radioButtonToggle(newActiveButton){
    deactivateButton(activeButton);
    activeButton = newActiveButton;
    activateButton(activeButton);
}
function activateButton (buttonObj){
    buttonObj.disabled = true;
    buttonObj.classList.add("activeRadioButton");
}
function deactivateButton (buttonObj){
    buttonObj.disabled = false;
    buttonObj.classList.remove("activeRadioButton");
}
