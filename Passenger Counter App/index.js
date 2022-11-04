// Getting Count Id
// document.getElementById("count").innerText = 5
let count = 0;
function increment()
{
    count+=1;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = (count>=0) ? "#08f108" : "red";
}
function decrement()
{
    count-=1;
    document.getElementById("count").innerText = count;
    document.getElementById("count").style.color = (count<0) ? "red" : "#08f108";
    
}
function save()
{
    // alert("Entry Saved :"+ count);
    
    var t = " : " + count;
    document.getElementById("history").innerText += t;
    count = 0;
    document.getElementById("count").textContent = 0;
    document.getElementById("count").style.color = "white";
}