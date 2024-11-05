currentNum = 0;

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
   let color = document.getElementById("numDisplay").style.color;
   let number = currentNum;
   let entry = {color: color, number: number};
   localStorage.setItem(localStorage.length, JSON.stringify(entry));
   let savedEntry = document.createElement("div");
   savedEntry.innerHTML = number;
   savedEntry.style.color = color;
   document.getElementById("savedNums").appendChild(savedEntry);

}
function reload()
{
    document.getElementById("savedNums").innerHTML = "";
    let numbers = localStorage.length;
    for (let i = 0; i < numbers; i++)
    {
        let obj = JSON.parse(localStorage.getItem(i.toString()));
        let div = document.createElement("div");
        div.innerText = obj.number;
        div.style.color = obj.color;
        document.getElementById("savedNums").appendChild(div);
    }
}