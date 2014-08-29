

EZLog = (function() {

    var _getLogger = function(_name, options) {
        var name = _name;
        var color = undefined;
        var background = undefined;
        if (options !== undefined) {
            color = options.color;
            background = options.background;
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
            if (style.length === 0) {
                args.push('[' + name + '] ');
            } else {
                args.push('%c[' + name + '] ');
                args.push(style.join("; "));
            }
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            };
            return args;
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
            info      : _info,
            error     : _error,
            warn      : _warn,
            log       : _log
        }
    };
    return {
        getLogger : _getLogger,
    };
})();


