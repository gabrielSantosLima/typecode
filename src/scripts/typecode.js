import textProcess from './textProcess.js'
import animation from './animation.js'

export const typecode = () => {

    async function doAnimation(ctx ,text){
        const content = await textProcess(text)
        animation(ctx, content)
    }

    return {
        doAnimation
    }
}