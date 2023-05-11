function clickUpdateBtn() {
  const updateBtn = document.querySelector("#update");
  if (updateBtn) {
    updateBtn.click();
  }
}

// Call the function when the page is loaded
window.addEventListener("load", clickUpdateBtn);

// Call the function every 30 minutes using setInterval()
setInterval(clickUpdateBtn, 30 * 60 * 1000);