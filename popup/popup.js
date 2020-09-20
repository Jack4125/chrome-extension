let autoplay = document.querySelector('.autoplay-state');

document.getElementById('hide').addEventListener('click', () => {
  console.log('clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // first parameter of sendMessage targets only the tab
    // where the extension was clicked on
    chrome.tabs.sendMessage(tabs[0].id, { action: 'hide' });
    chrome.storage.local.set({ action: 'hide' });
  });
});

document.getElementById('show').addEventListener('click', () => {
  console.log('clicked');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'show' });
    chrome.storage.local.set({ action: 'show' });
  });
});

// hide all
// doesn't work on new tabs, because they have new ids, aren't included
document.getElementById('hide-all').addEventListener('click', () => {
  console.log('clicked');
  chrome.tabs.query({ url: 'https://*.youtube.com/*' }, (tabs) => {
    tabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, { action: 'hide' }));
    chrome.storage.local.set({ action: 'hide' });
  });
});

document.getElementById('show-all').addEventListener('click', () => {
  console.log('clicked');
  chrome.tabs.query({ url: 'https://*.youtube.com/*' }, (tabs) => {
    tabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, { action: 'show' }));
    chrome.storage.local.set({ action: 'show' });
  });
});

// auto next
document.getElementById('start').addEventListener('click', () => {
  console.log('clicked');
  autoplay.innerHTML = 'Autoplay is running...';
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'start' });
  });
});

document.getElementById('stop').addEventListener('click', () => {
  console.log('clicked');
  autoplay.innerHTML = '';
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'stop' });
  });
});
