export default function savePreferences(){
    
    function saveTheme(text){
        const splitText = text.split("")
        return {
            splitText
        }
    }
    
    return{
        getSplitTextContent
    }
}