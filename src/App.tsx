import React, {useEffect} from 'react';
import {View, SafeAreaView, NativeModules, Alert, Button} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

import styles from './styles';
import Quiz from './Screens/Quiz';
import HeaderClass from './Components/Headers';
import TypeScriptComponent from './Components/TypeScriptSample/TypeScriptComponent';

const App = () => {
  interface NativeProp {
    sum: number;
  }

  useEffect(() => {
    checkPreviousSession();
    NativeModules.HelloWorld?.addTwoNumbers(5, 7)
      .then(({sum}: NativeProp) => {
        Alert.alert(sum.toString());
      })
      .catch((error: Error) => {
        console.log(error);
        Alert.alert(error?.message);
      });
  }, []);

  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();

    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      Alert.alert("Sorry about that crash, we're working on a solution");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderClass title={'Quiz Application'} />
        <Quiz />
        {/* <TypeScriptComponent /> */}
        <Button
          title="Testing Button"
          onPress={
            () => Analytics.trackEvent('testing_button', {Internet: 'WiFi', GPS: 'Off'})
            // Crashes.generateTestCrash();
            // throw new Error('Some Text');
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
