// @flow

import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

export class AppLoader extends Component {
  render() {
    return (
      <LoaderWrapper>
        <ActivityIndicator size="large" color="#fff" />
      </LoaderWrapper>
    )
  }
}

const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
  background: ${props => props.theme.DARK_BLUE};
  background: #071262;
`
