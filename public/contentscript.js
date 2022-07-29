/* eslint-disable no-undef */
const container = document.head || document.documentElement;
const scriptTag = document.createElement("script");
scriptTag.setAttribute("async", "false");
scriptTag.src = chrome.runtime.getURL("script.js");
container.insertBefore(scriptTag, container.children[0]);

window.addEventListener("viper_message", (event) => {
  chrome.runtime.sendMessage(
    {
      data: event.detail,
    },
    (response) => {
      // Can return null response if window is killed
      if (!response) {
        return;
      }
      console.log(response);
    }
  );
});