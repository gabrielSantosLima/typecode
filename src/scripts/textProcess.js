export default function textProcess(){
    
    function getSplitTextObject(text){
        const splitText = text.split("")
        const sizeOfSplitText = splitText.length
        
        return {
            splitText,
            sizeOfSplitText
        }
    }

    return{
        getSplitTextObject
    }
}
