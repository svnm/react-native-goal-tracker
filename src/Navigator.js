import React from 'react'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './screens/Home'
import IncompleteScreen from './screens/Incomplete'
import CompleteScreen from './screens/Complete'
import NewScreen from './screens/New'
import EditScreen from './screens/Edit'

import { NewIcon } from './components/icons'

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
        headerTitle: 'All Goals',
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
        headerTitle: 'Incomplete Goals',
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
        headerTitle: 'Complete Goals',
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
    New: { screen: NewScreen },
    Edit: { screen: EditScreen }
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
