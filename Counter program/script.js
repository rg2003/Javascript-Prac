const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const ResetBtn = document.getElementById("ResetBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
 
incBtn.onclick = function ()
{
    count++;
    countLabel.textContent = count;
}
decBtn.onclick = function ()
{
    count--;
    countLabel.textContent = count;
}

ResetBtn.onclick = function ()
{
    count = 0;
    countLabel.textContent = count;
}

