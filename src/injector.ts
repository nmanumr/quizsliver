function loadLocalScript(url: string) {
    let s = document.createElement('script');
    s.src = chrome.extension.getURL(url);
    (document.head || document.documentElement).appendChild(s);
}

function loadUrlScript(url: string, onLoad) {
    let s = document.createElement('script');
    s.src = url;
    s.onload = onLoad;
    (document.head || document.documentElement).appendChild(s);
}

function loadTextScript(script: string) {
    let s = document.createElement('script');
    s.textContent = script;
    (document.head || document.documentElement).appendChild(s);
}
loadTextScript(`var extId = "${chrome.runtime.id}";`);

loadLocalScript("sliver.js");
