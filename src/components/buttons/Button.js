import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import { ButtonWrapper, ButtonText } from '../../styles/typography'

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props

    return (
      <ButtonWrapper underlayColor={theme.DARK_BLUE} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </ButtonWrapper>
    )
  }
}

export default withTheme(Button)
