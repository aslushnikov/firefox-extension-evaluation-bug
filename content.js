const s = document.createElement("script");
s.src = chrome.extension.getURL("injected.js");
document.body.appendChild(s);

setInterval(() => {
  console.log(`self.eval('JSON.stringify(1)') = `, self.eval('JSON.stringify(1)'));
  console.log(`     eval('JSON.stringify(1)') = `, eval('JSON.stringify(1)'));
}, 1000);
