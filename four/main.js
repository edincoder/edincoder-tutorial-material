
/* Edincoder Level 3 -> JavaScript Step 9: Make the "Hire Me" button trigger an email message to you when clicked.
*  To do this:
*   Create a function and assign it to a helpfully-named variable, e.g. "var setupHireMeButtonClick = function() {}"
*   Inside that function, use document.getElementById to get your Hire Me button element, and assign this to a variable, e.g. "var hiremeButton = document.getElementById('your-button-id')"
*   Call addEventListener on the hiremeButton to add a "click" event listener to that button - the listener will be another function, which will get called whenever the button is clicked.
*     e.g. hiremeButton.addEventListener("click", function(e) {}, false);
*   Inside your event listener function, create an anchor / link element (<a> tag), and assign this to a variable - e.g. var hiremeMailtoLink = document.createElement('a');
*   Set the "href" property of the link element to "mailto:YOUREMAIL", replacing YOUREMAIL with your email address
*   Set the "target" property of the link element t "_blank" - this tells your web browser to open the link in a new tab/window
*   Finally, call click() on the link element - this will trigger the browser functionality for clicking "mailto:" links, which should trigger an email client to open a compose email window!
*
*   Now we've got a function (e.g. "setupHireMeButtonClick") which /sets up/ the click event handler on the button, we still need to call that function!
*   However, we need to wait until the webpage has loaded before trying to do this, as otherwise your web browser might not have loaded all of the HTML tags yet.
*   To do this, we can add an event listener on the document itself, listening for the event "DOMContentLoaded" which means the whole HTML page has been loaded and processed by the browser.
*     e.g. document.addEventListener('DOMContentLoaded', setupHireMeButtonClick, false);
*/
var setupHireMeButtonClick = function() {
    var hiremeButton = document.getElementById('hireme');
    var hiremeOverlay = document.getElementById('hireme-overlay');
    var hiremeForm = document.getElementById('hireme-form');
    var hiremePopupSendButton = document.getElementById('hireme-send');
    var hiremePopupCancelButton = document.getElementById('hireme-cancel');

    hiremeButton.addEventListener("click", function(e) {
        hiremeOverlay.classList.add("visible");
    }, false);

    hiremeForm.addEventListener("submit", function(e) {
        e.preventDefault();

        if(hiremeForm.checkValidity()) {

            var hiremeMailtoLink = document.createElement('a');
            var mailToLink = "mailto:help@edincoder.tk?";

            var mailContent = "Subject=About Me Message from: " + document.getElementById("hireme-name").value + "&";
            mailContent += "cc=" + document.getElementById("hireme-email").value + "&";
            mailContent += "body=" + encodeURIComponent(document.getElementById("hireme-message").value);

            hiremeMailtoLink.href = mailToLink + mailContent;
            hiremeMailtoLink.target = "_blank";
            hiremeMailtoLink.click();

            hiremeOverlay.classList.remove("visible");
        }
    }, false);

    hiremePopupCancelButton.addEventListener("click", function(e) {
        e.preventDefault();
        hiremeOverlay.classList.remove("visible");
    }, false);
};

document.addEventListener('DOMContentLoaded', setupHireMeButtonClick, false);






