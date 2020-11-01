export default function textAnimation(){
    
    function makeTextTypeAnimation(parent,char){
        parent.innerHTML += `<label>${char}</label>`
    }

    return {
        makeTextTypeAnimation
    }
}   