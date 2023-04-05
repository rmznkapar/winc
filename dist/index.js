"use strict";
exports.__esModule = true;
var winc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var tltArr = [];
    args.forEach(function (arg) {
        if (typeof arg === "string") {
            tltArr.push(arg);
        }
        if (typeof arg === "object") {
            if (Array.isArray(arg)) {
                if (arg.length === 1) {
                    tltArr.push(!!arg[0]);
                }
                else if (arg.length === 2 || arg.length === 3) {
                    if (arg[0]) {
                        tltArr.push(arg[1]);
                    }
                    else if (arg.length === 3) {
                        tltArr.push(arg[2]);
                    }
                }
            }
            if (typeof arg === 'object' && arg !== null) {
                Object.keys(arg).forEach(function (csname) {
                    if (arg[csname]) {
                        tltArr.push(csname);
                    }
                });
            }
        }
    });
    return tltArr.join(" ");
};
exports["default"] = winc;
