import React, { Component } from 'react'
import { withTheme } from 'styled-components'
import { ButtonContainer, ButtonText } from '../styles/typography'

class Button extends Component {
  render() {
    const { text, onPress, theme } = this.props

    return (
      <ButtonContainer underlayColor={theme.DARK_BLUE} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    )
  }
}

export default withTheme(Button)
