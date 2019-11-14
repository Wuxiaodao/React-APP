import React, { Component } from 'react'
import { NavBar,Icon,Tabs } from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class AppFeel extends Component {  
    render() {
        return (
          
            <div>
                <NavBar
                style={{background:'#3fcccb',color:'#fff'}}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      ]}
    >灵感</NavBar>
   <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
      <div style={{ height: '150px' }}></div>
    </Tabs>
    <div style={{float:'left',width:'100%'}}>
    <img style={{width:'45%',float:'left',marginLeft:'3%',marginTop:'-8em'}} src={`./images/t1.png`}
    alt=''
    />
    <img style={{width:'45%',float:'left',marginLeft:'4%',marginTop:'-8em'}} src={`./images/t2.png`}
    alt=''
    />
    
    </div>
    <div style={{float:'left',width:'100%'}}>
    <img style={{width:'45%',float:'left',marginLeft:'3%',marginTop:'2em'}} src={`./images/t3.png`}
    alt=''
    />
    <img style={{width:'45%',float:'left',marginLeft:'4%',marginTop:'2em'}} src={`./images/t4.png`}
    alt=''
    />
    
    </div>
    <div style={{float:'left',width:'100%'}}>
    <img style={{width:'45%',float:'left',marginLeft:'3%',marginTop:'2em'}} src={`./images/t3.png`}
    alt=''
    />
    <img style={{width:'45%',float:'left',marginLeft:'4%',marginTop:'2em'}} src={`./images/t4.png`}
    alt=''
    />
    
    </div>
     </div>
     
     
        )
    }
}
