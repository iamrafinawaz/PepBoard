let cTool="pencil";
let canvasBoard=document.querySelector("canvas");
let tool=canvasBoard.getContext("2d");
let body = document.querySelector("body");
// canvas dimensions set karna ke baad jo change karenge wahi reflect hoga
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.strokeStyle="lightpink";