import renderView from './renderView.js'

const viewRender = renderView()

export default function typecode(){

    function start(){
        viewRender.render()
    }

    return {
        start
    }
}