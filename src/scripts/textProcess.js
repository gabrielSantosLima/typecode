export default function textProcess(){
    
    function getSplitTextContent(text){
        const splitText = text.split("")
        return {
            splitText
        }
    }
    
    return{
        getSplitTextContent
    }
}
