const homeButton = document.getElementById("homeButton");
const aboutButton = document.getElementById("aboutButton");
const blogButton = document.getElementById("blogButton");
const resumeButton = document.getElementById("resumeButton");
const contactButton = document.getElementById("contactButton");

const homeContent = document.getElementById("homeContent");
const aboutContent = document.getElementById("aboutContent");
const blogContent = document.getElementById("blogContent");
const resumeContent = document.getElementById("resumeContent");
const contactContent = document.getElementById("contactContent");

homeButton.addEventListener("click", function(_event){radioButtonToggle(this);contentToggle(homeContent);});
aboutButton.addEventListener("click", function(_event){radioButtonToggle(this);contentToggle(aboutContent);});
blogButton.addEventListener("click", function(_event){radioButtonToggle(this);contentToggle(blogContent);});
resumeButton.addEventListener("click", function(_event){radioButtonToggle(this);contentToggle(resumeContent)});
contactButton.addEventListener("click", function(_event){radioButtonToggle(this);contentToggle(contactContent)});

// Set active to Home as default. Home content is already being displayed on page
var activeButton = homeButton;
var visibleContent = homeContent;
activateButton(activeButton);

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

/**
 * Toggle content displayed by adding or removing contentDisplayed class.
 * @param {Obj} contentObj 
 */
function contentToggle(contentObj) {
    visibleContent.classList.remove("contentDisplayed");
    visibleContent = contentObj;
    visibleContent.classList.add("contentDisplayed");
}