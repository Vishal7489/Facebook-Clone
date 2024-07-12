import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import VectorIcon from '../utils/VectorIcon';
import { TabData } from '../data/TabData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}
    >
      {TabData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.name}
          component={tab.route}
          options={{
            tabBarIcon: ({ focused }) => (
              <VectorIcon
                type={focused ? tab.activeIconType : tab.inactiveIconType}
                name={focused ? tab.activeIconName : tab.inactiveIconName}
                size={focused ? tab.size : tab.unFocusSize}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;
