import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import AboutScreen from './AboutScreen';
import TimelineScreen from './TimelineScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="TimeLine" component={TimelineScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;
