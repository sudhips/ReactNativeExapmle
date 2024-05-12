import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Buttons from './Buttons';
import {AnswerObject} from '../Screens/Quiz';

interface Answers {
  useranswer: AnswerObject | undefined;
  answers: string[];
  setcorrectanswer: any;
  checkanswer: () => void;
}

const Answers: FC<Answers> = props => {
  return (
    <SafeAreaView>
      <View style={styles.answerContainer}>
        {props.answers.map((answer, key) => {
          return (
            <View>
              <Buttons
                {...{key, answer}}
                correct={props.useranswer?.correctanswer === answer}
                disabled={props.useranswer ? true : false}
                onPress={() => {
                    (props.setcorrectanswer.current = answer),
                    props.checkanswer()
                }}
              />
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  answerContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
});

export default Answers;
