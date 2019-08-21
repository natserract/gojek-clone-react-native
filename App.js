/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @AlfinSurya
 * @GojekDevelopment
 */

import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux'

/* Navigation Config */
import AppWithNavigationState from './src/configs/Navigation'
import Store from './src/redux/store/Index'

class App extends React.Component {
  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
  }

  render() {
    return (
     <Provider store={Store} >
        <AppWithNavigationState />
     </Provider>
    )
  }
};

export default App;
