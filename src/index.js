import { typecode } from './scripts/typecode.js'

let text = []
let indexChar = 0;
let totalSize = 0

let timePerChar = 1 // valor normal

const input = document.getElementById('input')
const button = document.getElementById('send')
const code = document.getElementById('code')
const bar = document.getElementById('bar')

// const app = typecode()


button.addEventListener('click', () => {
    const { value } = input
    text = value.split("") 
    totalSize = text.length
    indexChar = 0
    code.innerHTML = '<label></label>'
})

setInterval(() => {
    if(totalSize == 0) return 
    
    if(indexChar == totalSize) return 

    code.innerHTML += `<label>${text[indexChar]}</label>`
    
    console.clear()
    console.log(`Array de texto: ${text}`)
    console.log(`Tamanho do array: ${totalSize}`)
    console.log(`Índice do array: ${indexChar}`)

    indexChar++
}, timePerChar)

    
// if(indexChar == totalSize){
//     indexChar = 0
//     code.innerHTML = ''
// } // reiniciar