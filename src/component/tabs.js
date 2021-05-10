import React, { Component } from 'react';
import { Tab, Tabs } from 'native-base';
import Tab1 from './photos';
import Tab2 from './like';
export default class TabsAdvancedExample extends Component {
    render() {
        return (
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "white",  alignSelf: "center", height: 6 }}  >

                <Tab heading="Photos" tabStyle={{ backgroundColor: 'white', width: 50 }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: '#30439B', fontWeight: 'bold' }}>
            <Tab1 />
          </Tab>
          <Tab heading="Liked" tabStyle={{ backgroundColor: 'white', width: 50 }} textStyle={{ color: 'gray' }} activeTabStyle={{ backgroundColor: 'white' }} activeTextStyle={{ color: '#30439B', fontWeight: 'bold' }}>
            <Tab2 />
          </Tab>
         
            
            </Tabs>
        );
    }
}