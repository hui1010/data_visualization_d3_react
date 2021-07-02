import React, {useRef, useEffect} from 'react'
import * as d3 from 'd3'

function Chart1() {

    const accessToRef = useRef(null)


    useEffect(()=> {
        d3.select(accessToRef.current).style("background-color", "#eee")
    }, [])

    return (
        <div ref={accessToRef}>
            Testing Refs
        </div>
    )
}


export default Chart1
