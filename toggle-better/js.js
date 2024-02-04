const toggl = document.getElementById("toggle");
const obraz = document.getElementById("obraz")
toggl.addEventListener("click", zmiana);
toggl.addEventListener("animationcancel", alarm);
let pomoc = 0;
function zmiana(){
    if(pomoc == 0){
    toggl.style.animationName = "ruch-noc";
    toggl.style.left = "146px";
    pomoc = 1;
    console.log("0");
    toggl.style.background = "linear-gradient(to top, #dfe9f3 0%, white 100%)"
    document.body.style.background = "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"
    obraz.style.backgroundImage = "url('kashimo.gif')"
    }else if(pomoc == 1){
        toggl.style.animationName = "ruch-dzien";
        toggl.style.left = "5px";
        pomoc = 0;
        console.log("1");
        toggl.style.background = "linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)"
        document.body.style.background = "linear-gradient(315deg, #378b29 0%, #ffffff 74%)"
        obraz.style.backgroundImage = "url('hakari.gif')"
    }
}


function alarm(){
    alert("animacja przerwana!")
}

