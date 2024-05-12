/* TypeScript - React native hooks state and refs */

import React, {useRef, useState} from 'react';
import {TextInput, View} from 'react-native';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

interface User {
  name: string;
  age: number;
  email: string;
}

interface Items {
  title: string;
  price: number;
  id: string;
}

const Home = ({navigation}: HomeScreenProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [user, setUser] = useState<User>({name: '', age: 0, email: ''});
  const [listItems, setListItems] = useState<Items[]>([]);
  const [details, setDetails] = useState<null>(null);

  const refText = useRef<TextInput>(null);
  const refView = useRef<View>(null);

  return (
    <View ref={refView}>
      <TextInput ref={refText}/>
    </View>
  );
};

export default Home;
