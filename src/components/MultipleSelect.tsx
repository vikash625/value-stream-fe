import React, {useEffect} from 'react';
import {Select} from "antd";
const axios = require('axios').default;

interface Props {

}
const MultipleSelect: React.FunctionComponent<Props> = () => {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    // useEffect(()=>{
    //     // axios.get('http://localhost/api/update_batch_list?batch_list=' +
    //     //     encodeURIComponent('{"maker":"( FA6990 long name)","name":"FA6990","ticked":true}&batch_list={"maker":"( FA3977 long name)","name":"FA3977","ticked":true}&products={"name":"IBRANCE","maker":"(IBRANCE Long Name)","ticked":true}'),
    //     // {
    //     //     headers: {
    //     //         'Content-Encoding': 'gzip'
    //     //     }
    //     // }
    //     // )
    //     axios.get('http://localhost/api/update_batch_list',
    //         { params: { batch_list: {"maker":"( FA6990 long name)","name":"FA6990","ticked":true},
    //                 product_list: {"name":"IBRANCE","maker":"(IBRANCE Long Name)","ticked":true},
    //         } })
    //         .then((res: any)=>console.log('response>>',res))
    // },[])

    const { Option } = Select;
    
    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}  value={i}>{i.toString(36) + i}</Option>);
    }
    return (
        <>
            <Select
                mode="multiple"
                allowClear
                style={{ width: '100%'}}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
                onChange={handleChange}
            >
                {children}
            </Select>
        </>
    );
};

export default MultipleSelect