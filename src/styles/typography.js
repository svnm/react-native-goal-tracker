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
  font-size: ${6 * vw};
  font-weight: bold;
  line-height: ${7 * vw};
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
  align-items: center;
  background-color: ${props => props.theme.DARK_BLUE};
  border-radius: 5;
  justify-content: center;
  margin-top: 20px;
  margin-left: 40px;
  padding: 20px;
  width: 130;
`

export const ButtonText = styled.Text`
  font-size: 20;
  color: ${props => props.theme.WHITE};
`

export const GoalCardWrapper = styled.View`
  border-bottom-color: ${props => props.theme.LIGHT_GREY};
  border-bottom-width: 0.8;
  display: flex;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
`

export const GoalCardInnerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  width: 100%;
  z-index: 1;
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
  background-color: white;
  border-bottom-color: ${props => props.theme.LIGHT_GREY};
  border-bottom-width: 0.8;
  font-size: 22;
  margin-bottom: 20;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 40px;
  width: 100%;
`

export const GoalTitle = styled.Text`
  font-size: 24;
  padding: 10px;
  color: ${props => props.theme.WHITE};
`
