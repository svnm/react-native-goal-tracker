# [react-native-goal-tracker](https://github.com/StevenIseki/react-native-goal-tracker)

A react native goal tracker using Expo, Redux, React Navigation and Styled Components.

![](https://raw.githubusercontent.com/StevenIseki/react-native-goal-tracker/master/screenshot.gif)

## Run the app

Install with yarn
```
yarn install
```

Open and start the app using the [expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli), then select to Run on Android device or Run on iOS simulator.

```
expo start
```

## Test and Lint

```
npm run lint
npm run test
```

## Question

```jsx
this.setState({ counter: this.state.counter + this.props.increment })
```

The code for incrementing the counter would be better in an action, an `increment` action would be fired to update the state of the counter in the redux store.

The counter could then be passed from the redux store to the component as props, meaning that it would be a pure or stateless component using either React.PureComponent or a function.

```jsx

export class Counter extends React.PureComponent {
}

export const Counter = ({counter}) => (
)
```

The benefits of using pure functional component is that it does not mutate state and has no lifecycle  methods. Pure functions are also easier to test and are more performant.
