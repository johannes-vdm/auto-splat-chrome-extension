const updateBtn = document.querySelector("#update");

function clickUpdateBtn() {
  if (updateBtn) {
    updateBtn.click();
    console.log("CLICKED");
  }
}

function overrideAlert() {
  window.alert = function (message) {
    console.log("ALERT CREATED");
    clickUpdateBtn();
    return true;  // Return true to automatically accept the alert
  }
}

// Call the function after a short delay when the page is loaded
// window.addEventListener("load", function () {
//   setTimeout(clickUpdateBtn, 100);
// });

// Call the function every 30 minutes using setInterval()
setInterval(clickUpdateBtn, 30 * 60 * 1000);

// Add an event listener to the document object for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', overrideAlert);
chrome.windows.create({
  type: 'popup',
  url: '',
  width: 400,
  height: 200,
  top: screen.availHeight / 2 - 100,
  left: screen.availWidth / 2 - 200
}, function (window) {
  chrome.notifications.create({
    type: 'basic',
    iconUrl: 'icon.png',
    title: 'Page loaded!',
    message: 'The page has finished loading.',
    requireInteraction: true
  })

})