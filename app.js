const $burger=document.querySelector("");
const $navlinkContainer=document.querySelector("");
const $navlinks=document.querySelectorAll("");

$burger.onclick =()=>
{
    $navlinkContainer.classList.toggle("nav-clicked");
    $burger.classList.toggle("burger-clicked");


    $navlinks.forEach((link,index)=> {
        if(link.style.animation)
        {
            link.style.animation=""; 
        }
        else{
            link.style.animation =`navlinkanimation 0.5s ease forward ${index/5 +0.5}s`;
        }
 
    });
}