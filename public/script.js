/* eslint-disable no-undef */
window.viper = {
    // connect: () => {
    //   window.postMessage("get-wallet-data", "*");
    // },
    // isViper: true,
    postMessage: (message) => {
      window.dispatchEvent(new CustomEvent("viper_message", { detail: message }));
    },
  };
  