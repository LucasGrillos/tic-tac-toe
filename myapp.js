var xButton = document.getElementById('x-button')
var oButton = document.getElementById('o-button')

var x = 'x'
var o = 'o'

var playerMark
var compMark

const drawBoard = () => {
    console.log("woo!")
}

const removeXButton = () => {
    xButton.style.opacity = '0%'
}

const removeOButton = () => {
    oButton.style.opacity = '0%'
}

const clickXorO = (char) => {
    char===x ? 
        (xButton.style.animation = '1.2s minimize-start-button 1',
        xButton.addEventListener("animationend", removeXButton),
        setTimeout(() => {oButton.style.animation = '1.2s minimize-start-button'}, 600),
        oButton.addEventListener("animationend", removeOButton)) 
        :
        (oButton.style.animation = '1.2s minimize-start-button 1',
        oButton.addEventListener("animationend", removeOButton), 
        setTimeout(() => {xButton.style.animation = '1.2s minimize-start-button'}, 600),
        xButton.addEventListener("animationend", removeXButton))   
    
    setTimeout(() => (document.getElementById('start-buttons').remove()), 1800)
    
    //xButton.style.animation = '1.2s minimize-start-button 1';
    //setTimeout(() => {oButton.style.animation = '1.2s minimize-start-button'}, 600)
}

const hoverSelectFocus = (char) => {
    if(char===x) {
        oButton.style.opacity = '50%'
        oButton.style.transform = 'scale(0.9)'
        xButton.style.transform = 'scale(1.15)'
    }

    else {
        xButton.style.opacity = '50%'
        xButton.style.transform = 'scale(0.9)'
        oButton.style.transform = 'scale(1.1)'
    }
}

const hoverLeaveFocus = (char) => {
    if(char===x) {
        oButton.style.opacity = '100%'
        oButton.style.transform = 'scale(1)'
        xButton.style.transform = 'scale(1)'
    }

    else {
        xButton.style.opacity = '100%'
        xButton.style.transform = 'scale(1)'
        oButton.style.transform = 'scale(1)'
    }
}