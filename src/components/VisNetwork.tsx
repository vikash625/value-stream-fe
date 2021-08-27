import React, { useEffect, useRef} from 'react'
import * as vis from "vis-network";
// @ts-ignore
import {visData}  from "../data/visData"

interface Props {

}

const VisNetwork: React.FunctionComponent<Props> = () => {

    const visRef = useRef(null)

    useEffect(()=>{
        const visContainer = visRef?.current
        var data: any = {
            nodes: visData.nodes,
            edges: visData.links,
        };
        var network = new vis.Network(visContainer!, data, {physics: {enabled: false}});
    },[])
    return (
        <div style={{width: '1000px', height: '1000px'}} ref={visRef}>
            <h1>hii</h1>
        </div>
    )
}

export default VisNetwork
