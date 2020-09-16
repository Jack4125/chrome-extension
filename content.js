console.log('Entered extension content');

setTimeout(function () {
  document.querySelector('.ytp-next-button').click();
}, 10000);

// let imgs = document.getElementsByTagName('img');

// for (img of imgs) {
//   let file = 'images/get_started16.png';
//   let url = chrome.extension.getURL(file);
//   img.src = url;
// }

// chrome.tabs does not exist on frontend content, as it is part of browser
// not page
