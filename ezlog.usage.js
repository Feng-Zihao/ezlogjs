

red  = EZLog.getLogger("red  log", {color: 'red', background: 'lightgray'});
blue = EZLog.getLogger("blue log", {color: 'blue'});
normal = EZLog.getLogger("normal");

red.info("m1", "m2", {"key1": 1}, [1,2,3,4,5]);
blue.info("m1", "m2", {"key1": 1}, [1,2,3,4,5]);
red.info("m1", "m2", {"key1": 1}, [1,2,3,4,5]);
normal.info("this is normal log", {"key1": 1});
red.info("m1", "m2", {"key1": 1}, [1,2,3,4,5]);
