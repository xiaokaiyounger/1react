import React from 'react';
import { Tabs, WhiteSpace} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {Navlink} from 'react-router-dom'

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
class Header extends React.Component{
     state={
         tabs :[
             { title: '首页', key: 't1' },
             { title: '关注', key: 't2' },
             { title: '栏目', key: 't3' },
         ],
     };
    render() {
        return (
            <div>
                <StickyContainer>
                        <Tabs
                            tabs={this.state.tabs}
                            initialPage={'t1'}
                            tabBarPosition='top'
                            renderTabBar={renderTabBar}
                            onTabClick
                        >
                        </Tabs>

                </StickyContainer>
            </div>
        )
    }
}

export default Header;
