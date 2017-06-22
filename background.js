chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.executeScript({

    code: 'var all=document.getElementsByTagName("*");for (var i=0,max=all.length;i<max;i++) {all[i].style.backgroundColor="#003333";all[i].style.color="#999999"};'

  });
});
