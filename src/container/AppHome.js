import React, { Component } from 'react'
import { NavBar,Icon,Carousel } from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (  
            <div>
                <NavBar
                style={{background:'#3fcccb',color:'#fff'}}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      ]}
    >住吧家居</NavBar>
   
        <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {[1,2].map(val => (
            
              <img
                src={'./images/'+val+'.jpg'}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                  
                }}
              />
           
          ))}
        </Carousel>
    
    
     
      <div style={{width:'100%', alignItems: 'center', justifyContent: 'center',backgroundColor:'#eeeeee'}}>
    <img style={{float:'left', width:'29.3%',display: 'flex',marginTop:'1em',marginLeft:'3%'}} src={`./images/3.png`}
    alt=''
    />
    <img style={{float:'left',width:'29.3%',display: 'flex',marginTop:'1em',marginLeft:'3%'}} src={`./images/4.png`}
    alt=''
    />
    <img style={{float:'left', width:'29.3%',display: 'flex',marginTop:'1em',marginLeft:'3%'}} src={`./images/5.png`}
    alt=''
    />
    </div>
      <div>
      <div style={{marginTop:'2em',float:'left'}}>
      <p style={{width:'0.5em',height:'2em',float:'left',marginLeft:'0.34em',backgroundColor:'#3fcccb',borderColor:'#3fcccb'}}></p>
        <span style={{fontSize:'30',float:'left',marginLeft:'1em'}}>
          热门推荐</span></div>
      </div>
      <div style={{width:'100%', marginTop:'4em'}}>
      <img style={{width:'100%'}} src={'./images/6.png'} alt=''/>
    </div>
            </div>
        )
    }
}
