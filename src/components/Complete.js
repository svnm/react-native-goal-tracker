// @flow

import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../styles/colors'

export const Complete = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    rejectResponderTermination
    underlayColor="white"
  >
    <Ionicons
      name="md-checkmark-circle-outline"
      size={32}
      color={colors.DARK_BLUE}
    />
  </TouchableHighlight>
)
