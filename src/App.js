import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Root } from './styles/typography'

import store from './store'
import Navigator from './Navigator'
import { colors } from './styles/colors'

class RootContainer extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Root>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <Navigator />
        </Root>
      </ThemeProvider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
