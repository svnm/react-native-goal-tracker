import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { IconRightContainer } from '../../styles/typography'

const New = ({ onPress }) => (
  <IconRightContainer onPress={onPress}>
    <Ionicons name="md-add" size={28} color="white" />
  </IconRightContainer>
)

export default New
