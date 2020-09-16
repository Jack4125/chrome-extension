// chrome.tabs.onActivated.addListener((tab) => {
//   chrome.tabs.get(tab.tabId, (currentT_tab_info) => {
//     if (/^https:\/\/www\.youtube/.test(currentT_tab_info.url)) {
//       chrome.tabs.executeScript(null, { file: './content.js' }, () =>
//         console.log('injected to foreground')
//       );
//     }
//   });
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it (like read the url)
  if (changeInfo.url) {
    // do something here
    console.log('background', changeInfo.url);
    chrome.tabs.executeScript(null, { file: './content.js' }, () => {
      console.log('injected to foreground');
    });
  }
});
