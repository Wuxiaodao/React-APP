import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppShop from './AppShop';
import AppFeel from './AppFeel';
import AppMy from './AppMy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i  className="iconfont icon-shouye"></i>
            }
            selectedIcon={<i  className="iconfont icon-1"></i>
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          
          <TabBar.Item
            icon={<i  className="iconfont icon-linggan"></i>
              
          
            }
            selectedIcon={
              <i  className="iconfont icon-linggan1"></i>
            }
            title="灵感"
            key="Friend"
          
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          <AppFeel/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i  className="iconfont icon-store_icon"></i>
            }
            selectedIcon={
              <i  className="iconfont icon-shangcheng"></i>
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
          <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i  className="iconfont icon-wode"></i>}
            selectedIcon={<i  className="iconfont icon-wodedangxuan"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          <AppMy/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}