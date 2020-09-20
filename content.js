let player = document.querySelector('.html5-main-video');
let timer;

chrome.runtime.onMessage.addListener((request) => {
  console.log('request received', request);
  if (request.action === 'hide') {
    console.log('hide');
    player.style.visibility = 'hidden';
  }

  if (request.action === 'show') {
    console.log('show');
    player.style.visibility = 'visible';
  }

  if (request.action === 'start') {
    console.log('start');
    timer = setInterval(() => {
      document.querySelector('.ytp-next-button').click();
    }, 10000);
  }

  if (request.action === 'stop') {
    console.log('stop');
    clearInterval(timer);
  }
});

// hide all
chrome.storage.local.get('action', (response) => {
  console.log('entered storage', response);

  if (response.action === 'hide') {
    player.style.visibility = 'hidden';
  }

  if (response.action === 'show') {
    player.style.visibility = 'visible';
  }
});
