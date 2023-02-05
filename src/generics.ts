//function generic
function display<template>(value: template): template {
  console.log(value);
  return value;
}

let exampleString = "this is an example string";
let exampleNumber = 1234;

let resultString  = display(exampleString);

// the same function we can use for any type

let resultNumber = display(exampleNumber);