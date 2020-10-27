import { typecode } from './scripts/typecode.js'

const input = document.getElementById('input')
const button = document.getElementById('send')
const code = document.getElementById('code')
const bar = document.getElementById('bar')

// const app = typecode()

button.addEventListener('click', () => {
    const { value } = input
    const chars = value.split("") 

    if(!value) return code.innerHTML = ""

    bar.classList.remove('isNotTyping')
    
    for(const char of chars){
        code.innerHTML += `<label>${char}</label>`
    }
    
    bar.classList.add('isNotTyping')
    // app.doAnimation(ctx, value)
})