import React, {FC, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Title {
  key: number;
  answer: string;
  onPress: () => void;
  correct: boolean;
  disabled: boolean;
}

const Buttons: FC<Title> = props => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          backgroundColor: !props.disabled ? '#F5F5DC' : '#F5DEB3',
          width: '80%',
          elevation: 5,
          justifyContent: 'center',
          alignContent: 'center',
          marginLeft: 27,
          height: 40,
          marginTop: 10,
        }}
        onPress={() => props.onPress()}>
        <Text
          style={[
            styles.textStyle,
            {color: props.correct ? 'brown' : 'black'},
          ]}>
          {props.answer}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 8,
  },
});

export default Buttons;
