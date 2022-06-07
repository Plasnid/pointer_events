// ! pointer eventts

/**
 * * first touch has isPrimary = true, others are false
 * * pointer Id is a unique touchpoint for each touch
 * * height and width relate to how much of the screen you have touched
 * * tilt and pressure are also tracked if you are using a pen device
 */
const video = document.querySelector(".video");
console.log("bork!")

video.addEventListener("pointerdown", e =>{
    e.preventDefault();
    console.log("down!");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.id = e.pointerId;
    positionDot(e,dot);
    document.body.append(dot);
    
});

video.addEventListener("pointermove", e => {
    const dot = document.getElementById(e.pointerId);
    if(dot==null) return;
    positionDot(e, dot);
});

video.addEventListener("pointerup", (e)=>{
    const dot = document.getElementById(e.pointerId);
    if(dot==null) return;
    dot.remove();
})

video.addEventListener("pointercancel", (e)=>{
    const dot = document.getElementById(e.pointerId);
    if(dot==null) return;
    dot.remove();
})


function positionDot(e,dot){
    dot.style.width = `${e.width*10}px`;
    dot.style.height = `${e.height*10}px`;
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
}