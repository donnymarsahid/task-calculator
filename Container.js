import * as React from 'react';
import Calculator from './src/screens/Calculator';
import Hello from './src/screens/Hello';
import ListSoc from './src/screens/ListSoc';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'native-base';
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DetailSoc from './src/screens/DetailSoc';

const Tab = createBottomTabNavigator();

function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ route }) => ({
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: theme.colors.primary['300'] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Calculator') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Hello') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'ListSoc') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary['800'],
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Hello" component={Hello} />
      <Tab.Screen name="ListSoc" component={ListSoc} />
    </Tab.Navigator>
  );
}

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Hello"
          component={Hello}
          options={{
            title: 'Hello Screen',
          }}
        />
        <Stack.Screen
          name="Detail Social"
          component={DetailSoc}
          options={{
            title: 'Detail Social Screen',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
