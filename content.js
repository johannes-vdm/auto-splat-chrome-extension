// Find the button with the id "update"
const updateBtn = document.querySelector("#update");

// Check if the button text is "Enable Dev Mode"

console.log(updateBtn);
if (updateBtn && updateBtn.textContent.trim() === "Enable Dev Mode") {
  console.log("YES")
  updateBtn.click()
  // Create a new MutationObserver
  const observer = new MutationObserver((mutationsList) => {
    // Check if the button text has changed
    const changedText = mutationsList.some((mutation) => {
      return mutation.type === "characterData" && mutation.target.textContent.trim() !== "Enable Dev Mode";
    });

    console.log(changedText)

    if (changedText) {
      console.log("Button text has been updated");
      // Disconnect the observer once the text has been updated
      observer.disconnect();
    }
  });

  // Observe changes to the text content of the button
  observer.observe(updateBtn, { characterData: true, subtree: true });
} else if (updateBtn.textContent.trim() === "Update Content") {
  // updateBtn.click()
  console.log("Content updated")
} else {
  console.log("Button not found or text is not 'Enable Dev Mode'");
}