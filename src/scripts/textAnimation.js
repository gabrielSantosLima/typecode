export default function textAnimation(){

    function type(char, time, onType){
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                onType(char)
                resolve("Bora man")
            }, time)
        })
    }

    return {
        type
    }
}   