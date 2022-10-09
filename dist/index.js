"use strict";
// basic types
let id = 5;
let company = 'Goody4444';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// tuple
let person = [1, 'Goody', true];
// tuple array
let employee;
employee = [
    [1, 'Goody'],
    [2, 'Elvis'],
    [3, 'Edeh']
];
// union
let pid;
pid = '22';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// string
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'john',
};
// Type Assertion
let cid = 1;
let custmerId = cid;
// Function 
function addNum(x, y) {
    return x + y;
}
// Volid
function log(message) {
}
