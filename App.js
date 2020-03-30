import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer, useLinking} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

function First() {
  return (
    <View style={{ flex: 1 }}>
      <Text>First</Text>
    </View>
  )
}

function SubFirst() {
  return (
    <View style={{ flex: 1 }}>
      <Text>SubFirst</Text>
    </View>
  )
}

function SubSecond() {
  return (
    <View style={{ flex: 1 }}>
      <Text>SubSecond</Text>
    </View>
  )
}

function Second() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Second</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
const FirstStack = createStackNavigator();
const SecondStack = createStackNavigator();

function FistStackView() {
  return (
    <FirstStack.Navigator>
      <FirstStack.Screen name="first" component={First} />
      <FirstStack.Screen name="subfirst" component={SubFirst} />
    </FirstStack.Navigator>
  )
}

function SecondStackView() {
  return (
    <SecondStack.Navigator initialRouteName="second">
      <SecondStack.Screen name="second" component={Second}/>
      <SecondStack.Screen name="subsecond" component={SubSecond}/>
    </SecondStack.Navigator>
  )
}

const App = () => {
  const ref = useRef(null);

  const { getInitialState } = useLinking(ref, {
    prefixes: ['myapp://'],
    config: {
      secondTab: {
        initialRouteName: 'second',
        screens: {
          subsecond: 'test/:someParam',
          second: 'test',
        }
      },
    },
  });


  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    Promise.race([
      getInitialState(),
      new Promise(resolve =>
        // Timeout in 150ms if `getInitialState` doesn't resolve
        // Workaround for https://github.com/facebook/react-native/issues/25675
        setTimeout(resolve, 150)
      ),
    ])
      .catch(e => {
        console.error(e);
      })
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }
        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={ref} initialState={initialState}>
        <Tab.Navigator>
          <Tab.Screen name="firstTab" component={FistStackView} />
          <Tab.Screen name="secondTab" component={SecondStackView} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
