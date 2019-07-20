import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
import '../assets/sass/home.scss'
import { Accordion, List } from 'antd-mobile';
import Cell from "../components/cell/Cell";
import Footer from "../layouts/Footer";
import {Link} from 'react-router-dom'

class Home extends Component {

    onChange = (key) => {
        console.log(key);
    };


    state={
        list:[]
    };
    componentDidMount(){
        fetch(
            '/mock/home',
        ).then(
            data => data.json()
        ).then(
            res=>this.setState({list:res.page_data})
        )
    }
    render() {
        let {list} = this.state;
        return (
            <div className="home">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        startSlide: 2,
                        speed: 400,
                        // widthOfSiblingSlidePreview: 10,
                        auto: 3000,
                        continuous: true,
                    }}
                >
                    <Link style={{background:"#399"}} to="/detail/1">PANE 1</Link>
                    <Link style={{background:"#393"}} to="/detail/2">PANE 2</Link>
                    <Link style={{background:"#939"}} to="/detail/3">PANE 3</Link>
                </ReactSwipe>
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
        );
    }
}


export default Home