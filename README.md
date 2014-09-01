EZLogJS
=========
A small util to help debugging JavaScript in tons of logs.

Features
-------
1. Color prompt
2. Without breaking the original expanding of the console

Usage
-------
```
red  = EZLog.getLogger({name: 'red  log', color: 'red', background: 'lightgray'});
gray = EZLog.getLogger({name: 'gray log', color: 'gray'});
normal = EZLog.getLogger();

red.info("welcome to preview EZLog.", "It's main feature with color hint.");
gray.debug("It will help to trace messages for tons of log in development");
red.log("What's more ", "it maintain the expanding of console.log");
normal.warn("For example.   ", {"key1": 1}, [1,2,3,4,5], function(){return "this is a fucntion()"});
red.error("and it's really small ", "right?");
```


Snapshot
--------
![for Chrome] (https://raw.githubusercontent.com/Feng-Zihao/ezlogjs/master/ezlog_chrome.png)
![for Firefox](https://raw.githubusercontent.com/Feng-Zihao/ezlogjs/master/ezlog_firefox.png)
