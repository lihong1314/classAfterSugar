import React, { Component } from 'react';

// import Page5 from "../page5/index.js";
import './index.css';
export default class Page0 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: window.data.data[0],
            classchange:true
        }
    }
    componentDidMount() {

    }
    click(){
        this.setState({
            classchange:false
        })
        window.ToPage(1)
    }
    render() {
        let { data,classchange} = this.state
        return (
            <div className="bgbox">
                <img className="bgimg" src={data.bgImg} />
                <div className="btn" onClick={()=>{this.click()}}></div>
                <img className={classchange?'btnimg':'btnimg btnimgbig'} src={data.btn}/>
            </div>
        )
    }
}
