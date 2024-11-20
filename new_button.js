document.documentElement.style.minHeight = "200vh"; // This makes the document at least twice the height of the viewport

// Function to set the position of the main div (button in this case)
function setMainDivStyle(main_div, location) {
  if (location === "1") {
    main_div.style.cssText =
      "top:50%; left:50%; transform: translate(-50%, -50%); z-index: 9999; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "2") {
    main_div.style.cssText =
      "top:0%; left:50%;transform: translate(-50%, 0%); z-index: 9999; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "3") {
    main_div.style.cssText =
      "bottom:0%; left:50%; z-index: 999999; transform: translate(-50%, 0%); border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "4") {
    main_div.style.cssText =
      "top:0%; right:0%; z-index: 999999;max-width:50%; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "5") {
    main_div.style.cssText =
      "top:0%; left:0%; z-index: 999999; max-width:50%; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 4px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "6") {
    main_div.style.cssText =
      "bottom:0%; right:0%; z-index: 999999;max-width:50%; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "7") {
    main_div.style.cssText =
      "bottom:0%; left:0%; z-index: 999999;max-width:50%; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 8px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "8") {
    main_div.style.cssText =
      "top: 60%;left:0%;transform: translateY(-50%) rotate(-90deg);transform-origin: top left;margin:0 ; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 4px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  } else if (location === "9") {
    main_div.style.cssText =
      "top: 60vh;right:0;transform:translateY(-50%) rotate(90deg);transform-origin: top right;margin:0; border: none;background-color: #007BFF;font-size: 13px;font-weight: bold;box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);border-radius: 4px;cursor: pointer;position: fixed;color :white;padding: 6px 6px 6px 6px;transition: background-color 0.3s ease, box-shadow 0.3s ease;";
  }
}

// Function to create and load the iframe
function loadIframe() {
  // Check if iframe container exists, otherwise create it
  let iframeContainer = document.getElementById("iframeContainer");
  if (!iframeContainer) {
    iframeContainer = document.createElement("div");//div
    iframeContainer.id = "iframeContainer";
    iframeContainer.style.cssText =
      "display: none;position :fixed;top:10%; left: 50%; transform: translate(-50%, 0); width: 80%; height: 75%;max-width: 600px;max-height: 500px;border: 1px solid #ccc;z-index: 100; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);border-radius: 8px;overflow: hidden;"
    document.body.appendChild(iframeContainer);


      // Create close button
      const closeButton = document.createElement("button");
      closeButton.textContent = "x";
      closeButton.style.cssText =
      "position:absolute; top: 10px; right:10px; background:red;color: white; border:none; font-size: 12px; font-weight: bold; padding: 4px 8px; border-radius: 50%; cursor: pointer;";
      closeButton.addEventListener("click", () => {
        iframeContainer.remove(); // Remove the iframe container
      });
  
      // Append close button to the container
    iframeContainer.appendChild(closeButton);

     const iframe = document.createElement("iframe");
     iframe.id = "feedbackIframe";
     iframe.style.cssText = `
      width: 100%;
      height: calc(100% - 80px);
      border: none;
    `;
     iframeContainer.appendChild(iframe);
   }

  // Set the iframe source to port 8000 and display it
  document.getElementById("feedbackIframe").src =
    "http://127.0.0.1:8000/port8000.html?showForm=true";
  iframeContainer.style.display = "block";
}

// Create the feedback button dynamically
const feedbackButton = document.createElement("button");
feedbackButton.id = "feedbackButton";
feedbackButton.textContent = "Give Feedback";
// Add hover and active styles dynamically
feedbackButton.addEventListener("mouseover", () => {
  feedbackButton.style.backgroundColor = "#0056d2" ;
  feedbackButton.style.boxShadow = "0px 6px 8px rgba(0, 0, 0, 0.2)";
});
feedbackButton.addEventListener("mouseout", () => {
  feedbackButton.style.backgroundColor = "#007BFF";
  feedbackButton.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";
});
feedbackButton.addEventListener("mousedown", () => {
  feedbackButton.style.backgroundColor = "#0041a8";
  feedbackButton.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
});
feedbackButton.addEventListener("mouseup", () => {
  feedbackButton.style.backgroundColor = "#0056d2";
  feedbackButton.style.boxShadow = "0px 6px 8px rgba(0, 0, 0, 0.2)";
});

// Append the button to the body
document.body.appendChild(feedbackButton);

// Set button position
setMainDivStyle(feedbackButton, "8");

// Add click event to load iframe
feedbackButton.addEventListener("click", loadIframe);

window.addEventListener("message", function(event) {
  if (event.data === "closeIframe") {
    var iframeContainer = document.getElementById("iframeContainer");
    iframeContainer.style.display = "none"; // Hide iframe container
    var iframe = document.getElementById("feedbackIframe");
    iframe.src = ""; // Clear iframe content
  }
});
