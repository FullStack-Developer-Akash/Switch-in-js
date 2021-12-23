

function btn(){
    let switchbtn=document.getElementById("btn").value
    if(switchbtn=="true")
    {
        console.log(switchbtn)
        document.getElementById("btn").value="false"
        document.getElementById("background").style.backgroundColor="yellow";
    }
    if(switchbtn=="false") {
        console.log(switchbtn)
        document.getElementById("btn").value="true"
        document.getElementById("background").style.backgroundColor="black";
    }
}