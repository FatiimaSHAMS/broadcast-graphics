const goldBar = document.querySelector('.gold-bar');
const blackBar = document.querySelector('.black-bar');
const bottomBar = document.querySelector('.bottom-bar');
const textLayer = document.querySelector('.main-bar-text');
const bottomBartext = document.querySelector('.bottom-bar .bottom-bar-text');
const logo = document.querySelector('.img-container');
const topBar = document.querySelector('.top-bar');

// function runAnimationIN() {
//     // Re-run animations 
//     logo.style.animation = 'revealLeft .5s linear forwards';
//     goldBar.style.animation = 'slideIn .5s ease-in-out forwards .1s';
//     blackBar.style.animation = 'slideIn .5s ease-in-out forwards .2s';
//     bottomBar.style.animation = 'slideDownBottom .6s ease-in-out forwards .2s';
//     topBar.style.animation = 'slideUpTop .5s ease-in forwards .2s';
// }

function runAnimationOUT() {

    // Set clip path to match end of animation in 
    goldBar.style.clipPath = 'polygon(15px 0,100% 0 ,100% 100%,0% 100%)';
    blackBar.style.clipPath = 'polygon(15px 0,100% 0 ,100% 100%,0% 100%)';
 
    // Re-run animations 
    logo.style.animation = 'hideLeft .5s linear forwards';
    goldBar.style.animation = 'slideOut .4s ease-in-out forwards .3s';
    blackBar.style.animation = 'slideOut .4s ease-in-out forwards .2s';
    bottomBar.style.animation = 'slideUpBottom .3s ease-in forwards';
    topBar.style.animation = 'slideDownTop .3s ease-in forwards';
}

//Keyboard Shortcut to Toggle Animations
let isGraphicVisible = true;

window.addEventListener('keydown',(event) => {
    event.preventDefault();
    // Check if the pressed key code is 'Space' for spacebar 
    if(event.code ==='Space') {
        if(isGraphicVisible) {
            runAnimationOUT();
            isGraphicVisible = false;
        } else {
            location.reload();   
            isGraphicVisible = true;
        }
    }  
})

// On Load: Adjust bar width
window.onload=() => adjustBarWidth();
// Adjust bar widths to fit text
function adjustBarWidth() {
    // Get width of main text and bottom text 
    const textLayerWidth = textLayer.offsetWidth;
    const bottomBarTextWidth = bottomBartext.offsetWidth;

    // Add margin left from main text 
    const textLayerStyle=window.getComputedStyle (textLayer);
    const marginLeft= parseFloat(textLayerStyle.getPropertyValue('margin-left'));

    // Use the width of main or bottom text layer,  whichever is larger
    const barWidth= Math.max(textLayerWidth, bottomBarTextWidth) + marginLeft;

    //Set widths of bars
    blackBar.style.width= barWidth +'px';
    bottomBar.style.width=`${barWidth + 8}px`;
    goldBar.style.width = (barWidth + 15) + 'px';
}
