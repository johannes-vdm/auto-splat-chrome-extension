const updateBtn = document.querySelector("#update");
const eventList = document.createElement("ul");
document.body.appendChild(eventList);

function clickUpdateBtn() {
  if (updateBtn) {
    updateBtn.click();
    console.log("CLICKED");
    addEventToList("CLICKED");
  }
}

function overrideAlert() {
  window.alert = function (message) {
    console.log("ALERT CREATED");
    clickUpdateBtn();
    return true;  // Return true to automatically accept the alert
  }
}

function addEventToList(event) {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const listItem = document.createElement("li");
  listItem.innerText = `${time} - ${event}`;
  eventList.appendChild(listItem);
}

// Call the function after a short delay when the page is loaded
// window.addEventListener("load", function () {
//   setTimeout(clickUpdateBtn, 100);
// });

// Call the function every 30 minutes using setInterval()
setInterval(clickUpdateBtn, 30 * 60 * 1000);

// Add an event listener to the document object for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', overrideAlert);
