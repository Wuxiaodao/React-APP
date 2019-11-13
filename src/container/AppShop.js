import React, { Component } from 'react'
import { NavBar,Icon,Carousel} from 'antd-mobile';

export default class AppShop extends Component {  
    render() {
        return (
          
            <div>
                <NavBar
                style={{background:'#3fcccb',color:'#fffb'}}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      ]}
    >商城</NavBar>
   
   <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {[1,2,3,4].map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              
            >
              <img
                src={'./03.png'}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',position:'relative' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                  
                }}
              />
            </a>
          ))}
        </Carousel>
    <div style={{float:'left',marginTop:'-13.6em',position:'absolute'}}>
        <img src={`./sousuo.png`} alt=''/>
        <input type='text' placeholder='输入关键字搜索' style={{width:'21em',height:'3em',opacity:'0.5',marginTop:'-4.5em',position:'relative',float:'left',marginLeft:'5em'}}></input>
    </div>
    <div style={{float:'left',width:'100%'}}>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./zhuo.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./chuang.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./yi.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./ji.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./gui.png`} alt=''/>
    </div>
    <div>
        <p style={{float:'left',marginLeft:'10.7%',width:'6.34%'}}>桌</p>
        <p style={{float:'left',marginLeft:'12%',width:'6.34%'}}>床</p>
        <p style={{float:'left',marginLeft:'11.5%',width:'6.34%'}}>椅</p>
        <p style={{float:'left',marginLeft:'12%',width:'6.34%'}}>几</p>
        <p style={{float:'left',marginLeft:'11.5%',width:'6.34%'}}>柜</p>
    </div>
    <div style={{float:'left',width:'100%'}}>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./shujia.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./shafa.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./shipin.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./jiaju.png`} alt=''/>
        <img style={{float:'left',width:'10%',marginLeft:'8%',marginTop:'1em'}} src={`./all-icon.png`} alt=''/>
    </div>
    <div>
        <p style={{float:'left',marginLeft:'8.7%',width:'8%'}}>书架</p>
        <p style={{float:'left',marginLeft:'10%',width:'8%'}}>沙发</p>
        <p style={{float:'left',marginLeft:'6.5%',width:'16%'}}>家居饰品</p>
        <p style={{float:'left',marginLeft:'2%',width:'16%'}}>户外家具</p>
        <p style={{float:'left',marginLeft:'2.5%',width:'16%'}}>全部分类</p>
    </div>
    <div style={{float:'left',width:'100%',backgroundColor:'#eeeeee'}}>
        <img  style={{float:'left',width:'45%',marginLeft:'3%',marginTop:'1em',marginBottom:'1em'}} src={`./01.png`} alt=''/>
        <img style={{float:'left',width:'45%',marginLeft:'4%',marginTop:'1em',marginBottom:'1em'}} src={`./02.png`} alt=''/>
        <p style={{float:'left',marginLeft:'3%',fontSize:'12.5px',width:'47%'}}>Top Art Studio 欧式风格精细...</p>
        <p style={{float:'left',marginLeft:'1.8%',fontSize:'12.5px',width:'48.2%'}}>顺顺工艺欧式风格塑料外框黑...</p>
        <p style={{float:'left',marginLeft:'3%',fontSize:'14px',width:'15%'}}>￥ 39.95</p>
        <p style={{float:'left',marginLeft:'33%',fontSize:'14px',width:'15%'}}>￥ 83.99</p>
    </div>
    
    
     </div>
        )
    }
}
