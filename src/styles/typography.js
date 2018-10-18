// @flow

import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')
const vw = width / 100

export const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.LIGHT_BLUE};
`

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
  padding-left: 5%;
  padding-right: 5%;
`

export const IconRightContainer = styled.TouchableOpacity`
  height: 100%;
  padding-right: 15;
  justify-content: center;
`

export const IconLeftContainer = styled.TouchableOpacity`
  height: 100%;
  padding-left: 15;
  justify-content: center;
`

export const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
  background: ${props => props.theme.DARK_BLUE};
`

export const ButtonContainer = styled.TouchableHighlight`
  padding: 20px;
  width: 130;
  background-color: ${props => props.theme.DARK_BLUE};
  border-radius: 5;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-size: 20;
  color: ${props => props.theme.WHITE};
`

export const GoalCardWrapper = styled.View`
  background: ${props => props.theme.WHITE};
  border-bottom-color: #d3d3d3;
  border-bottom-width: 0.8;
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
`

export const GoalWrapper = styled.View`
  display: flex;
  width: 80%;
`

export const GoalListWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const NewGoalWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const GoalInput = styled.TextInput`
  font-size: 24;
  background-color: white;
  width: 100%;
  padding: 20px;
  margin-bottom: 20;
`

export const GoalTitle = styled.Text`
  font-size: 24;
  padding: 10px;
  color: ${props => props.theme.WHITE};
`
