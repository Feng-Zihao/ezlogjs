

var EZLog = (function() {

    var _getLogger = function(options) {
        var name = undefined;
        var color = undefined;
        var background = undefined;
        if (options !== undefined) {
            color = options.color;
            background = options.background;
            name = options.name;
        }

        var _wrap_arguments = function(_args) {
            var args = [];
            var style = [];
            if (background !== undefined) {
                style.push("background: " + background);
            }
            if (color !== undefined) {
                style.push("color: " + color);
            }
            if (name !== undefined) {
                if (style.length === 0) {
                    args.push('[' + name + '] ');
                } else {
                    args.push('%c[' + name + '] ');
                    args.push(style.join("; "));
                }
            }
            for (var i = 0; i < _args.length; i++) {
                args.push(_args[i]);
            };
            return args;
        };

        var _name = function() {
            if (arguments.length === 0) {
                return name;
            }
            name = arguments[0];
        };

        var _log = function() {
            console.log.apply(console, _wrap_arguments(arguments));
        };

        var _info = function() {
            console.info.apply(console, _wrap_arguments(arguments));
        };

        var _debug = function() {
            console.debug.apply(console, _wrap_arguments(arguments));
        };

        var _error = function() {
            console.error.apply(console, _wrap_arguments(arguments));
        };

        var _warn = function() {
            console.warn.apply(console, _wrap_arguments(arguments));
        };

        return {
            log       : _log,
            info      : _info,
            debug     : _debug,
            error     : _error,
            warn      : _warn,
            name      : _name
        }
    };
    return {
        getLogger : _getLogger,
    };
})();

