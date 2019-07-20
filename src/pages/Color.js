import React,{Component} from 'react'
import Cell from "../components/cell/Cell";
import axios from "axios/index";

class Color extends Component{
    state={
        list:[]
    };
    componentDidMount(){
        axios({
            url: 'mock/column',
            params:{_page:1,_limit:8}
        }).then(
            res=>this.setState({list:res.data.page_data})
        )
    }
    render(){
        return(
            <div className="Color">
                {
                    this.state.list.map(item=>(
                        <Cell
                            key={item.id}
                            data={item}
                            dataName="home"
                        />
                    ))
                }
            </div>
        )
    }
}

export default Color