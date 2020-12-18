import textAnimation from './textAnimation.js'
import textProcess from './textProcess.js'

export default function renderView({ 
    selectSpeed, 
    buttonRepeat, 
    buttonStart, 
    viewCode, 
    input 
},config = {
    repeatOn: false,
    speed: 200
}){
    const processText = textProcess()
    const { type } = textAnimation()
    
    function render(){
        addOnClickStart()
        addOnClickRepeat()
        addOnChangeSpeed()
    }

    async function startAnimation(splitText){
        clearViewCode()

        for(const text of splitText){
            await type(text, config.speed, setViewCode)
        }

        if(config.repeatOn) startAnimation(splitText)
    }
    
    function addOnClickStart(){
        buttonStart.addEventListener('click', onStart)
    }
    
    function addOnClickRepeat(){
        buttonRepeat.addEventListener('click', onToggleRepeat)
    }
    
    function addOnChangeSpeed(){
        selectSpeed.addEventListener('change', onSetSpeed)
    }

    function onStart(){
        const { value } = input
        clearViewCode()

        const { splitText } = processText.getSplitTextContent(value) 
        startAnimation(splitText)
    }

    function onToggleRepeat(){
        config.repeatOn = config.repeatOn ? false : true 
        buttonRepeat.classList.toggle('isRepeatOn')
    }

    function onSetSpeed(event){
        const { value } = event.target
        config.speed = Number(value)
    }

    function clearViewCode(){
        viewCode.innerHTML = '<label></label>'
    }

    function setViewCode(char){
        viewCode.innerHTML += `<label>${char}</label>`
    }

    return {
        render
    }
}