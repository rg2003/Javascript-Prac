let radius;
let circumference;
const PI = 3.14;


document.getElementById("button").onclick = function ()
{
    
    radius = document.getElementById("Text").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circ").textContent = `The circumference of  the circle is ${circumference}`;
}