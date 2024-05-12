import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface MyProps {
  name: string;
  age: number;
  email: string;
}

interface MyState {
  counter: number;
}

class ClassComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.name + '' + this.props.age + '' + this.props.email}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default ClassComp;
