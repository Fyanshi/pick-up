"use strict"
const obj = {
    temp: {},
    prop: 42
};

Object.freeze(obj);
// 
obj.temp.a = 33;

console.log(obj);