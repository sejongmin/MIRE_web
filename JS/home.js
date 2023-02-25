var docuid = function(id) {
    return document.getElementById(id);
};

var inc = 0;
var out = 0;
var str = 'MI:RE is always loading...';
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var t;

var anim = function() {
    inc = (inc + 1) % 4;
    if (inc === 0 && out < str.length) {
        docuid('anim').appendChild(document.createTextNode(str[out]));
        out++;
    } else if (out >= str.length) {
        docuid('shuffle').innerHTML = '';
        removeInterval(t);
    }
    docuid('shuffle').innerHTML =
      chars[Math.floor(Math.random() * chars.length)];
};

t = setInterval(anim, 50);
docuid('anim').innerHTML = '';

setTimeout(function(){
    clearInterval(t);
}, 8500);