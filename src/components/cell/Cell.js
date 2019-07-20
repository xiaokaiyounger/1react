import React from 'react'
import { List } from 'antd-mobile';
import {Link} from 'react-router-dom'


const Item = List.Item;
class Cell extends React.Component{

    render(){
        let {data,dataName}=this.props;
        return(
            <div>
                <Link
                    to={{pathname:'/detail/'+data.id,search:`dataName=${dataName}`}}
                >
                <Item
                        style={{borderBottom:'1px solid #ccc'}}
                        extra={data.des}
                    >
                        {data.id}.{data.title}
                    </Item>
                </Link>
            </div>
        )
    }
}
export default Cell