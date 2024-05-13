import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, NativeModules, Alert} from 'react-native';
import styles from './styles';
import Quiz from './Screens/Quiz';
import HeaderClass from './Components/Headers';
import TypeScriptComponent from './Components/TypeScriptSample/TypeScriptComponent';

const App = () => {
  interface NativeProp {
    sum: number;
  }

  useEffect(() => {
    // console.log("NativeModules:", NativeModules.HelloWorld?.helloWorld)
    // console.log("NativeModules add:", NativeModules.HelloWorld?.addTwoNumbers)
    NativeModules.HelloWorld?.addTwoNumbers(5, 7)
      .then(({sum}: NativeProp) => {
        Alert.alert(sum.toString());
      })
      .catch((error: Error) => {
        console.log(error);
        Alert.alert(error?.message);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <HeaderClass title={'Quiz App'} />
        <Quiz />
        {/* <TypeScriptComponent /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
