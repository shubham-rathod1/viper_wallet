/* eslint-disable no-undef */
const user = {
    username: "demo-user",
  };
  const responseHandlers = new Map();
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.data === "get-wallet-data") {
      chrome.storage.local.get(["wallet"], (result) => {
        console.log(result, "result");
        if (result) {
          sendResponse(user);
        } else {
          console.log("not connected");
        }
      });
    }
    return true;
  });