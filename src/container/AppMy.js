import React, { Component } from 'react'
import { NavBar,Icon,Carousel } from 'antd-mobile';

export default class AppMy extends Component {
    render() {
        return (  
            <div>
                <NavBar
                style={{background:'#3fcccb',color:'white'}}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
      ]}
    >我的</NavBar>
   
            </div>
        )
    }
}
