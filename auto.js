const updateBtn = document.querySelector("#update");
const eventList = document.createElement("ul");
document.body.appendChild(eventList);

addEventToList("🚀AUTO SPLAT EXTENSION LOADED");

function clickUpdateBtn() {
  if (updateBtn) {
    updateBtn.click();
    addEventToList("AUTO CLICKED");
  }
}

function overrideAlert() {
  window.alert = function (message) {
    clickUpdateBtn();
    // NOTE Auto accept alerts
    addEventToList("ALERT OVERWRITE");
    return true;
  };
}

function addEventToList(event) {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const listItem = document.createElement("li");
  listItem.innerText = `${time} - ${event}`;
  eventList.appendChild(listItem);
}

// NOTE Call the function after a short delay when the page is loaded
// window.addEventListener("load", function () {
//   setTimeout(clickUpdateBtn, 100);
// });

// NOTE Call the function every 30 minutes using setInterval()
setInterval(clickUpdateBtn, 30 * 60 * 1000);

// NOTE Add an event listener to the document object for the 'DOMContentLoaded' event
document.addEventListener("DOMContentLoaded", overrideAlert);
