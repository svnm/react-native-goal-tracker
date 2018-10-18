// @flow

import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { colors } from '../styles/colors'

export const Incomplete = ({ onPress }) => (
  <TouchableHighlight
    onPress={onPress}
    rejectResponderTermination
    underlayColor="white"
  >
    <Ionicons name="md-radio-button-off" size={32} color={colors.DARK_BLUE} />
  </TouchableHighlight>
)
