function adding(){
    const h=document.createElement('h2');
    const text=document.createTextNode('Click Me to Close');
    var div=document.getElementById('space');
    h.appendChild(text);
    div.appendChild(h);
}