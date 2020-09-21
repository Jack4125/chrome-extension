const autoplay = document.querySelector('.autoplay-state');
const alertDisplay = document.querySelector('.alert');

// hide screen
document
  .getElementById('hide')
  .addEventListener('click', () => screenControl('hide'));
document
  .getElementById('show')
  .addEventListener('click', () => screenControl('show'));

function screenControl(control) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (/^https:\/\/www.youtube.com\/watch/.test(tabs[0].url)) {
      chrome.tabs.sendMessage(tabs[0].id, { action: control });
      chrome.storage.local.set({ action: control });
    } else {
      alertDisplay.innerHTML = 'Sorry you can only do this on a video page';
    }
  });
}

// autoplay
document
  .getElementById('start')
  .addEventListener('click', () => autoplayControl('start'));
document
  .getElementById('stop')
  .addEventListener('click', () => autoplayControl('stop'));

function autoplayControl(control) {
  autoplay.innerHTML = 'Autoplay is running...';
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: control });
  });
}

// hide all
// doesn't work on new tabs, because they have new ids, aren't included
// document.getElementById('hide-all').addEventListener('click', () => {
//   console.log('clicked');
//   chrome.tabs.query({ url: 'https://*.youtube.com/*' }, (tabs) => {
//     tabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, { action: 'hide' }));
//     chrome.storage.local.set({ action: 'hide' });
//   });
// });
