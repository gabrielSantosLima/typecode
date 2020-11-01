import textAnimation from './textAnimation.js'
import textProcess from './textProcess.js'

const input = document.getElementById('input')
const buttonStart = document.getElementById('start')
const viewCode = document.getElementById('code')

const timePerChar = 175 // 175 = valor normal

const processText = textProcess()
const animationText = textAnimation()

const textObject = {
    splitText: [],
    sizeOfSplitText: 0
}

let indexOfSplitText = 0;

export default function renderView(){

    function render(){
        addOnClickStart()
        loop()
    }

    function loop(){
        setInterval(() => {
            if(textObject.sizeOfSplitText == 0) return 
            if(indexOfSplitText == textObject.sizeOfSplitText) return 
            
            animationText.makeTextTypeAnimation(
                viewCode,
                textObject.splitText[indexOfSplitText]
            )
            
            nextIndexOfSplitText()
        }, timePerChar)
    }

    function setValues(){
        const { value } = input
        clearViewCode()

        const { sizeOfSplitText, splitText } = processText.getSplitTextObject(value) 
        
        textObject.sizeOfSplitText = sizeOfSplitText
        textObject.splitText = splitText
    }

    function addOnClickStart(){
        buttonStart.addEventListener('click', setValues)
    }

    function clearViewCode(){
        viewCode.innerHTML = '<label></label>'
        resetIndeOfSplitText()
    }

    function resetIndeOfSplitText(){
        indexOfSplitText = 0
    }
    
    function nextIndexOfSplitText(){
        indexOfSplitText++
    }

    return {
        render
    }
}