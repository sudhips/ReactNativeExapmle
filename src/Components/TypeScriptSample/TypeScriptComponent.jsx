import React from 'react';
import { View, Text } from 'react-native';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

const TypeScriptComponent = () => {
    return (
        <View>
            <Text>TypeScript Component</Text>
            <ClassComp name={"Sudheesh "} age={32} email={"sudhi@gmail.com"}/>
            <FunctionalComp name={"Sachin "} age={30} email={"sachin@gmail.com"}/>
        </View>
    )
}

export default TypeScriptComponent
