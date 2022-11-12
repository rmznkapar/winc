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
                    if (!!arg[0]) {
                        tltArr.push(arg[1]);
                    }
                    else if (arg.length === 3) {
                        tltArr.push(arg[2]);
                    }
                }
            }
            else {
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
var testData = [
    [
        winc("tag bg-primary", [true, "text-white", "text-primary bg-opacity-30"]),
        "tag bg-primary text-white",
    ],
    [
        winc("p-4", [false, "text-red-500"]),
        "p-4"
    ],
    [
        winc("mb-2 font-bold", ['', "text-lg", "text-sm"]),
        "mb-2 font-bold text-sm"
    ],
    [
        winc([{ users: [] }, "relative", "absolute"]),
        "relative"
    ],
    [
        winc([true, "bottom-0", "bottom-32"]),
        "bottom-0"
    ],
    [
        winc({ absolute: true, "text-error": false, "font-bold": true }),
        "absolute font-bold"
    ],
    [
        winc([false, "text-success", "text-error"], { absolute: true }),
        "text-error absolute"
    ],
    [
        winc(false ? "block" : "opacity-0 hidden", "mt-2"),
        "opacity-0 hidden mt-2"
    ],
];
var test = function () {
    testData.forEach(function (_a, i) {
        var entry = _a[0], result = _a[1];
        console.log("Case ".concat(i, ": ").concat(entry === result));
    });
};
test();
