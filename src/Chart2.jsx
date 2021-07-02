import React, {useRef} from 'react'
import * as d3 from 'd3'

function Chart2() {
    const data = [1,2,3,4]
    const w = 600
    const h = 400

    let myRef = useRef(null)
    const accessToRef = d3.select(myRef.current)
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("background-color", "#ccc")
        .style("padding", 10)
    
    accessToRef.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i *70)
        .attr("y", (d, i) => h - 10*d)
        .attr("width", 65)
        .attr("height", (d, i) => d*10)
        .attr("fill", "tomato")

    return (
        <div ref={myRef}>
            
        </div>
    )
}

export default Chart2
