// TODO: in future we can have extra settings
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) =>{
    if(request.cmd == 'get_settings'){
      chrome.storage.sync.get({autoMark: true, autoNext: false}, (data)=>{
        sendResponse({
          "autoMark": data.autoMark,
          "autoNext": data.autoNext
        });
      })
    }
  }
);
