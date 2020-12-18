import renderView from './renderView.js'

export default function typecode(elementsOfDOM){
    const viewRender = renderView(elementsOfDOM)

    function start(){
        viewRender.render()
    }

    return {
        start
    }
}