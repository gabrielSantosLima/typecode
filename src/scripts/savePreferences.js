export default function savePreferences(){

    function saveTheme(theme){
        localStorage.setItem('theme', theme)
    }
    
    function getTheme(){
        const theme = localStorage.getItem('theme')
        if(!theme) return 'Light'
        return theme
    }

    return {
        saveTheme,
        getTheme
    }
}