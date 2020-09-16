chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentT_tab_info) => {
    if (/^https:\/\/www\.youtube/.test(currentT_tab_info.url)) {
      chrome.tabs.executeScript(null, { file: './foreground.js' }, () =>
        console.log('injected to foreground')
      );
    }
  });
});
