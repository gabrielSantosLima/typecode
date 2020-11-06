export default function textProcess(){
    
    function getSplitTextContent(text){
        const splitText = text.split("")
        const sizeOfSplitText = splitText.length
        
        return {
            splitText,
            sizeOfSplitText
        }
    }

    return{
        getSplitTextContent
    }
}
