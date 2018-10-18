// @flow

import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import { LoaderWrapper } from '../styles/typography'

export class AppLoader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <ActivityIndicator size="large" color="#fff" />
      </LoaderWrapper>
    )
  }
}
