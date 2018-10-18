import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

import { IconLeftContainer } from '../../styles/typography'

const Back = ({ onPress }) => (
  <IconLeftContainer onPress={onPress}>
    <Ionicons name="md-arrow-back" size={25} color="white" />
  </IconLeftContainer>
)

export default Back
