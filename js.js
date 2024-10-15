currentNum = 0;
array = []
function orangebutton()
{
    document.getElementById("numDisplay").style.color = "orange";
}
function pinkbutton()
{
    document.getElementById("numDisplay").style.color = "pink";
}
function purplebutton()
{
    document.getElementById("numDisplay").style.color = "mediumpurple";
}
function add()
{
    currentNum++;
    document.getElementById("numDisplay").innerHTML = currentNum;
}
function subtract()
{
    currentNum--;
    document.getElementById("numDisplay").innerHTML = currentNum;
}
function save()
{
    array.push(document.getElementById("savedNums").innerHTML = currentNum);
}