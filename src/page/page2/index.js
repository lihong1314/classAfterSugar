import React, { Component } from 'react';

import './index.css';
export default class Page2 extends Component {
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        this.state = {
            index,
            data: window.data.data[index],
            classchange:true
        }
    }
    componentDidMount() {
        // console.log()

    }
    click(){
        this.setState({
            classchange:false
        })
        window.ToPage(0)
    }
    render() {
        let { data,classchange} = this.state
        return (
            <div className="bgbox">
                <img className="bgimg" src={data.bgImg} />
                <div className="endbtn" onClick={()=>{this.click()}}>
                    <img className={classchange?'endbtnimg':'endbtnimg btnimgbig'} src={data.btn}/>
                </div>
                
            </div>
        )
    }
}
