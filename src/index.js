import typecode from './scripts/typecode.js'

const input = document.getElementById('input')
const buttonStart = document.getElementById('start')
const buttonRepeat = document.getElementById('repeat')
const buttonToggleTheme = document.getElementById('toggle-theme')
const selectSpeed = document.getElementById('select-speed')
const viewCode = document.getElementById('code')

const app = typecode({
    selectSpeed,
    input,
    buttonRepeat,
    buttonStart,
    buttonToggleTheme,
    viewCode
})

app.start()