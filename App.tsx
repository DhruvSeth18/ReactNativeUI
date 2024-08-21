import React from 'react';
import Router from './src/project1/Router/Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
function App(): React.JSX.Element {

  return (
    <>
      <SafeAreaProvider>
        <StatusBar hidden={true}/>
        <Router />
      </SafeAreaProvider>
    </>
  );
}

export default App;
