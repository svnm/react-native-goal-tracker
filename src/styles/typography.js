// @flow

import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')
const vw = width / 100

const Text = styled.Text``

export const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const CardDescription = styled(Text)`
  color: #444;
  font-size: ${4.5 * vw};
  line-height: ${5.5 * vw};
  margin-bottom: 7;
`

export const CardTitle = styled(Text)`
  font-size: ${7 * vw};
  line-height: ${8 * vw};
  margin-bottom: 8;
`

export const Date = styled(Text)`
  color: #444;
  font-size: ${4 * vw};
  margin-bottom: 10;
`

export const CompleteWrapper = styled.View`
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`

export const TitleText = styled.Text`
  font-size: 30;
  padding: 10px;
  color: ${props => props.theme.WHITE};
`
