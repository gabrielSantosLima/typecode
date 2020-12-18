import textAnimation from './textAnimation.js'
import textProcess from './textProcess.js'

export default function renderView({ 
    selectSpeed, 
    buttonRepeat, 
    buttonStart, 
    viewCode,
    buttonToggleTheme,
    input 
},config = {
    repeatOn: false,
    speed: 200,
    theme: 'Dark'
}){
    const processText = textProcess()
    const { type } = textAnimation()
    const elements = document.querySelectorAll(`.light-mode`)
    
    function render(){
        changeTheme()
        addOnClickStart()
        addOnClickRepeat()
        addOnChangeSpeed()
        addOnClickToggleTheme()
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
    
    function addOnClickToggleTheme(){
        buttonToggleTheme.addEventListener('click', onToggleTheme)
    }
    
    function addOnChangeSpeed(){
        selectSpeed.addEventListener('change', onSetSpeed)
    }

    function onStart(){
        const { value } = input
        if(!value) return
        const { splitText } = processText.getSplitTextContent(value) 
        startAnimation(splitText)
    }

    function onToggleRepeat(){
        config.repeatOn = config.repeatOn ? false : true 
        buttonRepeat.classList.toggle('isRepeatOn')
    }

    function onToggleTheme(){
        config.theme = config.theme === 'Dark' ? 'Light' : 'Dark'
        changeTheme()
        buttonToggleTheme.classList.toggle('isRepeatOn')
    }

    function changeTheme(){
        const isDark = config.theme === 'Dark' ? true : false
        elements.forEach(element => {
            if(!isDark){
                element.classList.remove('dark-mode')
                element.classList.add('light-mode')
                buttonToggleTheme.innerHTML = 'Dark Mode'
            }else{
                element.classList.remove('light-mode')
                element.classList.add('dark-mode')
                buttonToggleTheme.innerHTML = 'Light Mode'
            }
        })
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