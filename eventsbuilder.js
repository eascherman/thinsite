
var eventNames = [
    'click', 'contextmenu', 'dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mouseout', 'mouseup',
    /*'keydown', 'keypress', 'keyup',*/
    'abort', 'load', 'scroll',
    'blur', 'change', 'focus', 'focusin', 'focusout', 'input', 'invalid', 'reset', 'search', 'select', 'submit',
    'drag', 'dragend', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop',
    'copy', 'cut', 'paste',
    'animationend', 'animationiteration', 'animationstart',
    'transitionend',
    'show', 'toggle', 'wheel'
];

var out = `function on(evName, action) {
    return function(el) {
        return el.addEventListener(evName, action);
    };
}`;

out += eventNames.map(evName => `
on.${evName} = function(action) { return on('${evName}', action) };`
).join('');

module.exports = out;