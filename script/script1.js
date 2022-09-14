var rotated = 0


document.getElementById('openArrow').onclick = function(){
    document.getElementById('sideMenu').classList.toggle('sideBarWidth')
    rotated+=180
    document.getElementById('arrow').style.transform = 'rotate('+rotated+'deg)'

}

/*   var dwnWrap = document.getElementsByClassName('dwnWrap')
document.getElementById('third').click = function(){
    for(let i = 0; i < dwnWrap.length; i++){
        dwnWrap[i].style.display = "none"
    }
} */
 let dwnWrap = document.getElementsByClassName("dwnWrap")

document.getElementById('third').addEventListener("mouseover", function () {
    document.getElementById('dwnImg').style.visibility = 'hidden'
    for(let i = 0; i < dwnWrap.length; i++){
        dwnWrap[i].style.visibility = "visible"
    }
 })

 document.getElementById('third').addEventListener("mouseout", function () {
    document.getElementById('dwnImg').style.visibility = 'visible'
    for(let i = 0; i < dwnWrap.length; i++){
        dwnWrap[i].style.visibility = "hidden"
    }

 })


