import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

const IconLeftContainer = styled.TouchableOpacity`
  height: 100%;
  padding-left: 15;
  justify-content: center;
`

const Back = ({ onPress }) => (
  <IconLeftContainer onPress={onPress}>
    <Ionicons name="md-arrow-back" size={25} color="white" />
  </IconLeftContainer>
)

export default Back
