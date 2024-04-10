const mon = document.getElementById("mon")
const tue = document.getElementById("tue")
const wed = document.getElementById("wed")
const thu = document.getElementById("thu")
const fri = document.getElementById("fri")

const img = document.getElementById("change_img")

const schedule = document.getElementById("s")

mon.onclick = function(){
    img.src = "media/img-l.gif";
}

tue.onclick = function(){
    img.src = "media/img-e.gif";
}

wed.onclick = function(){
    img.src = "media/img-m.gif";
}

thu.onclick = function(){
    img.src = "media/img-e.gif";
}

fri.onclick = function(){
    img.src = "media/img-m.gif";
}

schedule.onmouseover = function(){
    alert("겹치는 공강 시간 있으면 같이 놀아요!")
}