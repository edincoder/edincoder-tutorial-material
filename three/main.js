
/* Edincoder Level 3 -> JavaScript Step 9: Make the "Hire Me" button trigger an email message to you when clicked
*  To do this, */
var setupHireMeButtonClick = function() {
    var hiremeButton = document.getElementById('hireme');

    hiremeButton.addEventListener("click", function(e) {
        var hiremeMailtoLink = document.createElement('a');
        hiremeMailtoLink.href = "mailto:help@edincoder.tk";
        hiremeMailtoLink.target = "_blank";
        hiremeMailtoLink.click();
    }, false);
};

document.addEventListener('DOMContentLoaded', setupHireMeButtonClick, false);



