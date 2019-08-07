import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';
import { hashHistory } from "react-router";
import './index.css';
export default class Page1 extends Component{
    constructor(props) {
        super(props)
        let index = this.props.location.search.substring(this.props.location.search.indexOf("=") + 1)
        
        if(index == 1){
            this.state = {
                index,
                data:window.data.data[index],
                publics:window.data.publics,
                audioUrl:'',
                raduioflg:false,
                jumpshow:"none",
                peopleShow:'block',
                jumpClass:'jump',
                cryshow:'none',
                clickOne:0,
                playClick:0,
                correctAnswerSrc:'',
                correctAnswerFlg:'none',
                rightSrc:window.data.publics.right,
                rightFlg:'none',
                t1:0,
                t2:0,
                t3:0,
                t4:0,
                t5:0
            }
        }else{
            this.state = {
                index,
                data:window.data.data[index],
                publics:window.data.publics,
                raduioflg:false,
                audioUrl:'',
                jumpshow:"none",
                peopleShow:'block',
                jumpClass:'jump',
                cryshow:'none',
                playClick:0,
                correctAnswerSrc:'',
                correctAnswerFlg:'none',
                rightSrc:window.data.publics.right,
                rightFlg:'none',
                lastrightFlg:'none',
                sugerbigFlg:'none',
                uneysrc:'',
                sugarsrc:'',
                t1:0,
                t2:0,
                t3:0,
                t4:0,
                t5:0,
                t6:0,
            }
        }
       
        
    }
    componentWillMount(){
        if(this.state.index == 1){
            this.setState({
                audioUrl:window.data.publics.zwt,
                raduioflg:true,
            })
        }
       
    }
    componentDidMount(){
        if(this.state.index == 1){
            this.refs.audio.play()
            // console.log(this.refs.audio)
            let playone = true;
            this.refs.audio.addEventListener('ended', () =>{  
                if(playone){
                    this.state.t6 = setTimeout(()=>{
                        this.setState({
                            audioUrl:this.state.data.question,
                            raduioflg:false,
                        })
                        this.refs.audio.play()
                        let playone1 = true;
                        this.refs.audio.addEventListener('ended', () =>{
                            if(playone1){
                                this.setState({
                                    clickOne:1,
                                    playClick:1,
                                })
                                playone1 = false;
                            }
                            
                        })
                        clearTimeout(this.state.t6)
                    },1000)
                    playone = false
                }
                
            }, true)
            
        }
        
    }
    
    componentWillUnmount() {
        // 卸载异步操作设置状态
        clearTimeout(this.state.t1);
        clearTimeout(this.state.t2);
        clearTimeout(this.state.t3);
        clearTimeout(this.state.t4);
        clearTimeout(this.state.t5);
        clearTimeout(this.state.t6);
        
        
    }
    changeFn(){
        let currentnum = parseInt(this.state.index);
        if(currentnum < 6){
            this.state.t1 = setTimeout(()=>{
                this.setState({
                    peopleShow:'block',
                    jumpshow:"none",
                    jumpClass:'jump',
                    rightFlg:'block',
                    audioUrl:this.state.publics.suc,
                })
                this.refs.audio.play()
                let playone = true;
                this.refs.audio.addEventListener('ended', () =>{
                    if(playone){
                        this.state.t2 = setTimeout(()=>{
                            this.setState({
                                rightFlg:'none',
                                correctAnswerSrc:this.state.data.right,
                                correctAnswerFlg:'block',
                                audioUrl:this.state.data.question,
                                raduioflg:true,
                            })
                            this.refs.audio.play()
                            let playone1 = true;
                            this.refs.audio.addEventListener('ended', () =>{
                                if(playone1){
                                    playone1 = false;
                                    this.state.t3 = setTimeout(()=>{
                                        let num = parseInt(this.state.index)+1;
                                        this.setState({
                                            index:num,
                                            data:window.data.data[num],
                                            correctAnswerFlg:'none',
                                        })
                                    },2000)
                                    this.state.t4 = setTimeout(()=>{
                                        clearTimeout(this.state.t1);
                                        clearTimeout(this.state.t2);
                                        clearTimeout(this.state.t3);
                                        let num = parseInt(this.state.index);
                                        this.setState({
                                            audioUrl:window.data.data[num].question
                                        })
                                        this.refs.audio.play()
                                        let playone2 = true;
                                        this.refs.audio.addEventListener('ended', () =>{
                                            if(playone2){
                                                this.setState({
                                                    clickOne:1,
                                                    playClick:1
                                                })
                                                playone2 = false;
                                            }
                                        })
                                    },3000)
                                }
                            })
                        },1000)
                        playone = false;

                        
                    }
                })
            },2000)
            
    
            
        }else{

            this.state.t1 = setTimeout(()=>{
                this.setState({
                    peopleShow:'block',
                    jumpshow:"none",
                    jumpClass:'jump',
                    rightFlg:'block',
                    audioUrl:this.state.publics.suc,
                })
                this.refs.audio.play()
                let playone = true;
                this.refs.audio.addEventListener('ended', () =>{
                    if(playone){
                        this.state.t2 = setTimeout(()=>{
                            this.setState({
                                rightFlg:'none',
                                correctAnswerSrc:this.state.data.right,
                                correctAnswerFlg:'block',
                                audioUrl:this.state.data.question,
                                raduioflg:true,
                            })
                            this.refs.audio.play()
                            let playone1 = true;
                            this.refs.audio.addEventListener('ended', () =>{
                                if(playone1){
                                    playone1 = false;
                                    this.state.t3 = setTimeout(()=>{
                                        this.setState({
                                            correctAnswerFlg:"none",
                                            lastrightFlg:'block',
                                            sugerbigFlg:'block',
                                            uneysrc:this.state.publics.uney,
                                            sugarsrc:this.state.publics.sugarsrc,
                        
                                        })
                                    },2000) 
                                    this.state.t4 = setTimeout(()=>{
                                        this.setState({
                                            audioUrl:this.state.publics.last,
                                        })
                                        this.refs.audio.play()
                                        let playone2 = true;
                                        this.refs.audio.addEventListener('ended', () =>{
                                            if(playone2){
                                                playone2 = false;
                                                this.state.t5 = setTimeout(()=>{
                                                    clearTimeout(this.state.t1);
                                                    clearTimeout(this.state.t2);
                                                    clearTimeout(this.state.t3);
                                                    clearTimeout(this.state.t4);
                                                    clearTimeout(this.state.t5);
                                                    this.setState({
                                                        audioUrl:'',
                                                        sugerbigFlg:'none',
                                                        lastrightFlg:'none',
                                                        uneysrc:'',
                                                        sugarsrc:'',
                                                    })
                                                    hashHistory.replace("/Page2"+"?id="+(currentnum+1))
                                                },1000)
                                            }
                                        })
                                    },4000)
                                    
                                }
                            })
                        },1000)
                        playone = false;
                    }
                })
            },2000)
            

            
        }
        
    }
    click(type){
        if(this.state.clickOne == 1){
            if(type === "A" && this.state.data.answer === "A"){
                this.setState({
                    jumpshow:"block",
                    peopleShow:'none',
                    jumpClass:'jump jumpA',
                    cryshow:'none',
                    clickOne:0,
                    correctAnswerSrc:this.state.data.TA
                })
                this.changeFn()

            }else if(type === "B" && this.state.data.answer === "B"){
                this.setState({
                    jumpshow:"block",
                    peopleShow:'none',
                    jumpClass:'jump jumpB',
                    cryshow:'none',
                    clickOne:0,
                    correctAnswerSrc:this.state.data.TB
                })
                this.changeFn()
            }else if(type === "C" && this.state.data.answer === "C"){
                this.setState({
                    jumpshow:"block",
                    peopleShow:'none',
                    jumpClass:'jump jumpC',
                    cryshow:'none',
                    clickOne:0,
                    correctAnswerSrc:this.state.data.TC
                })
                this.changeFn()
            }else if(type === "D" && this.state.data.answer === "D"){
                this.setState({
                    jumpshow:"block",
                    peopleShow:'none',
                    jumpClass:'jump jumpD',
                    cryshow:'none',
                    clickOne:0,
                    
                })
                this.changeFn()

            }else{
                this.setState({
                    cryshow:'block',
                    peopleShow:'none',
                    audioUrl:this.state.publics.error,
                })
                setTimeout(()=>{
                    this.refs.audio.play()
                },500)
            }
        }
        
    }
    playFn(){
        if(this.state.playClick == 1){
            this.setState({
                clickOne:1,
                audioUrl:this.state.data.question,
                raduioflg:true,
                playClick:0
            })
            setTimeout(()=>{
                this.refs.audio.play()
            },0)
            setTimeout(()=>{
                this.setState({
                    playClick:1
                })
            },1000)
        }
        
    }
   
    render() {
        const {data,publics,audioUrl,jumpshow,peopleShow,jumpClass,cryshow,raduioflg,correctAnswerSrc,correctAnswerFlg,rightSrc,rightFlg,lastrightFlg,sugerbigFlg,uneysrc,sugarsrc} = this.state;
        
        return (
            <div className="bgbox" style={{background:data.bgColor}}>
                <img className="bgimg" src={publics.bgImg} alt=""/>
                
                <div className="optionA" onClick={()=>this.click('A')}>
                    <img src={publics.Abg} alt=""/>
                    <img className="taizi" src={publics.taizi} alt=""/>
                    <img className="option" src={data.TA} alt=""/>
                </div>
                <div className="optionB" onClick={()=>this.click('B')}>
                    <img src={publics.Bbg} alt=""/>
                    <img className="taizi" src={publics.taizi} alt=""/>
                    <img className="option" src={data.TB} alt=""/>
                </div>
                <div className="optionC" onClick={()=>this.click('C')}>
                    <img src={publics.Cbg} alt=""/>
                    <img className="taizi" src={publics.taizi} alt=""/>
                    <img className="option" src={data.TC} alt=""/>
                </div>
                <div className="optionD" onClick={()=>this.click('D')}>
                    <img src={publics.Dbg} alt=""/>
                    <img className="taizi" src={publics.taizi} alt=""/>
                    <img className="option" src={data.TD} alt=""/>
                </div>

                <img className="people" style={{display:peopleShow}} src={publics.people} alt=""/>
                <GifPlayer className={jumpClass} style={{display:jumpshow}} gif={data.jump} autoplay={true} />

                <GifPlayer className='cry' style={{display:cryshow}} gif={publics.cry} autoplay={true} />

                <div className="playbtn" onClick={()=>this.playFn()}>
                    <img src={publics.music} />
                </div>

                <img className="rightbg" src={rightSrc} style={{display:rightFlg}} alt=""/>
                <div className="zhizhao" style={{display:correctAnswerFlg}}>
                    <div className="correctAnswer">
                        <img src={correctAnswerSrc} alt=""/>
                    </div>
                </div>
                
                <div className="lastright" style={{display:lastrightFlg}}>
                    <img className="lastbg" src="./File/images/lastbg.png" alt=""/>
                    <img className="uney" src={uneysrc} alt=""/>
                    <img className="sugerbig"  style={{display:sugerbigFlg}} src={sugarsrc} alt=""/>
                </div>

                <audio ref="audio" src={audioUrl} autoPlay={raduioflg} >
                      <track kind="captions" />
                      您的浏览器不支持 audio 元素。
                </audio>
            </div>
        )
    }
}
