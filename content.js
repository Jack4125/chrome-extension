let timer;

// manifest.json - content has to match YouTube url
console.log("entered content");

chrome.storage.local.get(['key'], result => {
  console.log('Value currently is ' + result.key);
});

chrome.runtime.onMessage.addListener((request) => {
  console.log('request received', request);
  
  // MUST querySelect element inside onMessage event
  if (request.action === 'hide') {
    document.querySelector('.html5-main-video').style.visibility = 'hidden';
  }

  if (request.action === 'show') {
    document.querySelector('.html5-main-video').style.visibility = 'visible';
  }

  if (request.action === 'start') {
    timer = setInterval(() => {
      document.querySelector('.ytp-next-button').click();
    }, 10000);
  }

  if (request.action === 'stop') {
    clearInterval(timer);
  }

  if (request.action === 'filter') {
    console.log('filter message rececived');
    let cards = document.querySelectorAll('ytd-grid-video-renderer');
    let authors = document.querySelectorAll('#text .yt-simple-endpoint');

    authors.forEach((name, index) => {
      if(name.innerHTML !== "RT America") {
        // console.log('found at index', index)
        cards[index].style.display = 'none';
      }
    })
  }
});

// hide all
// chrome.storage.local.get('action', (response) => {
//   console.log('entered storage', response);

//   if (response.action === 'hide') {
//     player.style.visibility = 'hidden';
//   }
// });