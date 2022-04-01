



// export class Stopwatch {
//     constructor(elem, options) {

//         var timer = createTimer(), startButton = createButton("start", start), stopButton = createButton("stop", stop), resetButton = createButton("reset", reset), offset, clock, interval;

//         // default options
//         options = options || {};
//         options.delay = options.delay || 1;

//         // append elements     
//         elem.appendChild(timer);
//         elem.appendChild(startButton);
//         elem.appendChild(stopButton);
//         elem.appendChild(resetButton);

//         // initialize
//         reset();

//         // private functions
//         function createTimer() {
//             return document.createElement("span");
//         }

//         function createButton(action, handler) {
//             var a = document.createElement("a");
//             a.href = "#" + action;
//             a.innerHTML = action;
//             a.addEventListener("click", function (event) {
//                 handler();
//                 event.preventDefault();
//             });
//             return a;
//         }

//         function start() {
//             if (!interval) {
//                 offset = Date.now();
//                 interval = setInterval(update, options.delay);
//             }
//         }

//         function stop() {
//             if (interval) {
//                 clearInterval(interval);
//                 interval = null;
//             }
//         }

//         function reset() {
//             clock = 0;
//             render(0);
//         }

//         function update() {
//             clock += delta();
//             render();
//         }

//         function render() {
//             timer.innerHTML = clock / 1000;
//         }

//         function delta() {
//             var now = Date.now(), d = now - offset;

//             offset = now;
//             return d;
//         }

//         // public API
//         this.start = start;
//         this.stop = stop;
//         this.reset = reset;
//     }
// }
  
  
// // basic examples
// var elems = document.getElementsByClassName("basic");

// for (var i = 0, len = elems.length; i < len; i++) {
// new Stopwatch(elems[i]);
// }


// // programmatic examples
// var aTimer = document.getElementById("a-timer");
// aTimer = new Stopwatch(aTimer);
// aTimer.start();

// var bTimer = document.getElementById("b-timer");
// bTimer = new Stopwatch(bTimer, {
// delay: 100
// });
// bTimer.start();

// var cTimer = document.getElementById("c-timer");
// cTimer = new Stopwatch(cTimer, {
// delay: 456
// });
// cTimer.start();

// var dTimer = document.getElementById("d-timer");
// dTimer = new Stopwatch(dTimer, {
// delay: 1000
// });
// dTimer.start();
