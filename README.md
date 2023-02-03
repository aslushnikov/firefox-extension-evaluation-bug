### https://bugzilla.mozilla.org/show_bug.cgi?id=1814898

This is a simple Web Extension to illustrate the Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1814898

This reproduces for me at least on Firefox 109.

To reproduce:
- Clone extension: 
  ```
  git clone  https://github.com/aslushnikov/firefox-extension-evaluation-bug
  ```
- install this extension in Firefox:
  * Open the about:debugging page
  * click the "This Firefox" option
  * click the Load Temporary Add-on button
  * select any file in this extension's directory
- navigate to `https://example.com`
- open Firefox DevTools and check the console output.

As of firefox 109, the output is:

```
self.eval('JSON.stringify(1)') =  Oh no! Someone broke my JSON.stringify!! content.js:6:11
     eval('JSON.stringify(1)') =  1 content.js:7:11
```

Expected output (e.g. the one in Chrome) is:
```
self.eval('JSON.stringify(1)') =  1 content.js:6:11
     eval('JSON.stringify(1)') =  1 content.js:7:11
```
