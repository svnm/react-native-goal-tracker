import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/Home'
import IncompleteScreen from './screens/Incomplete'
import CompleteScreen from './screens/Complete'
import NewScreen from './screens/New'

import { NewIcon, BackIcon } from './components/icons'

import { colors } from './styles/colors'

const AppMainTab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.DARK_BLUE
        },
        headerTitle: 'Goal Tracker',
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerRight: <NewIcon onPress={() => navigation.navigate('New')} />
      })
    },
    Incomplete: {
      screen: IncompleteScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-radio-button-off" size={23} color={tintColor} />
        ),
        headerStyle: {
          backgroundColor: colors.DARK_BLUE
        },
        headerTitle: 'Incomplete',
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerRight: <NewIcon onPress={() => navigation.navigate('New')} />
      })
    },
    Complete: {
      screen: CompleteScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name="md-checkmark-circle-outline"
            size={23}
            color={tintColor}
          />
        ),
        headerStyle: {
          backgroundColor: colors.DARK_BLUE
        },
        headerTitle: 'Complete',
        headerTitleStyle: {
          color: colors.WHITE
        },
        headerRight: <NewIcon onPress={() => navigation.navigate('New')} />
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.WHITE,
      inactiveTintColor: colors.LIGHT_BLUE,
      inactiveBackgroundColor: colors.DARK_BLUE,
      activeBackgroundColor: colors.DARK_BLUE,
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: colors.DARK_BLUE
      },
      style: {
        backgroundColor: colors.DARK_BLUE
      },
      upperCaseLabel: false
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false
  }
)

const AppMainStack = StackNavigator(
  {
    Home: { screen: AppMainTab },
    New: { screen: NewScreen }
  },
  {
    cardStyle: {
      backgroundColor: colors.WHITE
    },
    mode: 'modal'
  }
)

const AppDrawer = DrawerNavigator({
  Home: {
    screen: AppMainStack
  },
  New: {
    screen: NewScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'New',
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-add" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.DARK_BLUE
      },
      headerTitle: 'New',
      headerTitleStyle: {
        color: colors.WHITE
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />
    })
  }
})

const Navigator = TabNavigator(
  {
    Main: { screen: AppDrawer }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    },
    swipeEnabled: false
  }
)

export default Navigator
