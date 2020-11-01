import textAnimation from './textAnimation.js'
import textProcess from './textProcess.js'

const input = document.getElementById('input')
const buttonStart = document.getElementById('start')
const buttonRepeat = document.getElementById('repeat')
const selectSpeed = document.getElementById('select-speed')
const viewCode = document.getElementById('code')

const processText = textProcess()
const animationText = textAnimation()

const textContent = {
    splitText: [],
    sizeOfSplitText: 0
}
let indexOfSplitText = 0;

/*
    config = {
        repeatOn: false,
        speed: 17.5 // porcentagem de velocidade
    }
*/

export default function renderView(config = {
    repeatOn: false,
    speed: 200 // miliseconds
}){
    
    function render(){
        addOnClickStart()
        addOnClickRepeat()
        // addOnChangeSpeed()
        loop()
    }

    function loop(){
        setInterval(() => {
            if(textContent.sizeOfSplitText == 0) return
            
            if(config.repeatOn && indexOfSplitText == textContent.sizeOfSplitText){
                    clearViewCode()
                }
            
            if(indexOfSplitText == textContent.sizeOfSplitText) return 
            
            animationText.makeTextTypeAnimation(
                viewCode,
                textContent.splitText[indexOfSplitText]
            )
                
            nextIndexOfSplitText()
        }, config.speed)
    }

    function setValues(){
        const { value } = input
        clearViewCode()

        const { sizeOfSplitText, splitText } = processText.getSplitTextContent(value) 
        
        textContent.sizeOfSplitText = sizeOfSplitText
        textContent.splitText = splitText
    }

    function addOnClickStart(){
        buttonStart.addEventListener('click', setValues)
    }
    
    function addOnClickRepeat(){
        buttonRepeat.addEventListener('click', toggleRepeat)
    }
    
    function addOnChangeSpeed(){
        selectSpeed.addEventListener('change', setSpeed)
    }

    function setSpeed(event){
        const { value } = event.target
        
        console.log(Number(value))

        config.speed = Number(value)
    }

    function toggleRepeat(){
        config.repeatOn = config.repeatOn ? false : true 
        buttonRepeat.classList.toggle('isRepeatOn')
    }

    function clearViewCode(){
        viewCode.innerHTML = '<label></label>'
        resetIndexOfSplitText()
    }

    function resetIndexOfSplitText(){
        indexOfSplitText = 0
    }
    
    function nextIndexOfSplitText(){
        indexOfSplitText++
    }

    return {
        render
    }
}