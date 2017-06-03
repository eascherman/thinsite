
import {obs, install, bundle, on, map} from './exports.js';


var state = {};             // an object we'll attach mutable values to
obs(state, 'text');         // let the change detector know the text property of the state object is mutable
obs(state, 'keystroke');


var content = bundle        // the bundle template literal tag is used to create markup content
    `<h3>Text: ${() => state.text}</h3>
    <input type="text" ${on.input(ev => state.text = ev.target.value)} />

    <h3>Array</h3>
    <ol>
        ${map([1,2,3], (n, i, arr) => bundle
            `<li>
                <button ${on.click(ev => arr.splice(i, 0, Math.random()))}>+</button>
                <button ${on.click(ev => arr.splice(i, 1))}>-</button>
                ${n}
            </li>`
        )}
    </ol>
    
    <h3>Promise</h3>
    <div>
        ${new Promise(function(resolve, reject) {
            setTimeout(() => resolve('Three seconds have passed!'), 3000);
        })}
    </div>
    
    <h3>Keystroke Listeners</h3>
    Try pressing backspace, s, or shift-s!
    <div>${() => state.keystroke && `You pressed ${state.keystroke}!`}</div>`;

on.keyup.backspace(() => state.keystroke = 'backspace')(document);
on.keydown.s(() => state.keystroke = 's')(document);
on.keydown.shift.s(() => state.keystroke = 'shift-s')(document);

// var content = bundle 
//     `<h1>Hello ${() => 'Joe'}</h1>`;

install(content, document.body);





// function timeAction(name, iterations, action) {
//     var start = new Date();
//     for (var i=0; i<iterations; i++) 
//         action();
//     var end = new Date();
//     console.log(name + ': ' + (end - start) + 'ms');
// }

// timeAction('nothing', 100, function() {});



// var nums = [];
// for (var i=0; i<1000; i++) {
//     nums.push(i);
// }

// timeAction('for', 100, function() {
//     var total = 0;
//     for (var i=0; i<nums.length; i++) {
//         total += i;
//     }
// });

// timeAction('forEach', 100, function() {
//     var total = 0;
//     nums.forEach(num => total += num);
// });


// timeAction('current', 1000, function() {
//     function on(name, callback) {
//         return function(el) {
//             return el.addEventListener(name, callback);
//         };
//     };

//     [
//         'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
//         /*'keydown', 'keypress', 'keyup',*/
//         'abort', 'load', 'scroll',
//         'blur', 'change', 'focus', 'focusin', 'focusout', 'input', 'invalid', 'reset', 'search', 'select', 'submit',
//         'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop',
//         'copy', 'cut', 'paste',
//         'animationend', 'animationiteration', 'animationstart',
//         'transitionend',
//         'show', 'toggle', 'wheel'
//     ].forEach(function(eventName) {
//         on[eventName] = function(callback) {
//             return on(eventName, callback);
//         };
//     });
// });


// timeAction('alt', 1000, function() {
//     var evFunc = name => action => el => el.addEventListener(name, action);
//     function on(name, callback) {
//         return function(el) {
//             return el.addEventListener(name, callback);
//         };
//     };

//     var eventNames = [
//         'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
//         /*'keydown', 'keypress', 'keyup',*/
//         'abort', 'load', 'scroll',
//         'blur', 'change', 'focus', 'focusin', 'focusout', 'input', 'invalid', 'reset', 'search', 'select', 'submit',
//         'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop',
//         'copy', 'cut', 'paste',
//         'animationend', 'animationiteration', 'animationstart',
//         'transitionend',
//         'show', 'toggle', 'wheel'
//     ];
//     for (var i=0; i<eventNames.length; i++) {
//         var name = eventNames[i];
//         on[name] = evFunc(name);
//     }
// });



// timeAction('verbose', 1000, function() {
//     function on(evName, action) {
//         return function(el) {
//             return el.addEventListener(evName, action);
//         };
//     }
//     on.click = function(action) { return on('click', action) };
//     on.contextmenu = function(action) { return on('contextmenu', action) };
//     on.dblclick = function(action) { return on('dblclick', action) };
//     on.mousedown = function(action) { return on('mousedown', action) };
//     on.mouseenter = function(action) { return on('mouseenter', action) };
//     on.mouseleave = function(action) { return on('mouseleave', action) };
//     on.mousemove = function(action) { return on('mousemove', action) };
//     on.mouseover = function(action) { return on('mouseover', action) };
//     on.mouseout = function(action) { return on('mouseout', action) };
//     on.mouseup = function(action) { return on('mouseup', action) };
//     on.abort = function(action) { return on('abort', action) };
//     on.load = function(action) { return on('load', action) };
//     on.scroll = function(action) { return on('scroll', action) };
//     on.blur = function(action) { return on('blur', action) };
//     on.change = function(action) { return on('change', action) };
//     on.focus = function(action) { return on('focus', action) };
//     on.focusin = function(action) { return on('focusin', action) };
//     on.focusout = function(action) { return on('focusout', action) };
//     on.input = function(action) { return on('input', action) };
//     on.invalid = function(action) { return on('invalid', action) };
//     on.reset = function(action) { return on('reset', action) };
//     on.search = function(action) { return on('search', action) };
//     on.select = function(action) { return on('select', action) };
//     on.submit = function(action) { return on('submit', action) };
//     on.drag = function(action) { return on('drag', action) };
//     on.dragend = function(action) { return on('dragend', action) };
//     on.dragenter = function(action) { return on('dragenter', action) };
//     on.dragleave = function(action) { return on('dragleave', action) };
//     on.dragover = function(action) { return on('dragover', action) };
//     on.dragstart = function(action) { return on('dragstart', action) };
//     on.drop = function(action) { return on('drop', action) };
//     on.copy = function(action) { return on('copy', action) };
//     on.cut = function(action) { return on('cut', action) };
//     on.paste = function(action) { return on('paste', action) };
//     on.animationend = function(action) { return on('animationend', action) };
//     on.animationiteration = function(action) { return on('animationiteration', action) };
//     on.animationstart = function(action) { return on('animationstart', action) };
//     on.transitionend = function(action) { return on('transitionend', action) };
//     on.show = function(action) { return on('show', action) };
//     on.toggle = function(action) { return on('toggle', action) };
//     on.wheel = function(action) { return on('wheel', action) };
// });