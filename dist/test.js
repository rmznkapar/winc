"use strict";
exports.__esModule = true;
var _1 = require(".");
var testData = [
    [
        (0, _1["default"])("tag bg-primary", [true, "text-white", "text-primary bg-opacity-30"]),
        "tag bg-primary text-white"
    ]
];
var test = function () {
    testData.forEach(function (_a, i) {
        var entry = _a[0], result = _a[1];
        console.log("Case ".concat(i, ": ").concat(entry === result));
    });
};
test();
