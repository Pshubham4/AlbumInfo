import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import Dashboard from './src/Component/Dashboard';
import { Provider as ReduxProvider } from 'react-redux'
import store from './src/Redux/store';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReduxProvider store={store}>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Dashboard/>
    </SafeAreaView>
    </ReduxProvider>
  );
}



export default App;
