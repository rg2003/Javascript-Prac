let username;
document.getElementById("Submit").onclick = function ()
{
    username = document.getElementById("Text").value;
    document.getElementById("Header").textContent = `Welcome to our website ${username}`;
}