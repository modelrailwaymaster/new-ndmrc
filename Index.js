//notifcation
const cross = document.getElementById("close_cross");
const noti = document.getElementById("notification");

cross.addEventListener("mouseenter", () => {
    cross.classList.add("fa-beat");
});

cross.addEventListener("mouseleave", () => {
    cross.classList.remove("fa-beat");
});

cross.addEventListener("click", close_noti);

setTimeout(close_noti, 10000)

function close_noti() { 
    noti.style.transition = '.5s';
    noti.style.opacity = '0';
    noti.style.visibility = 'hidden';
    setTimeout(() => {
        noti.classList.add("hide")
    }, 500);
};
