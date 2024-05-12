import React, { FC, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MyProps {
    name: string;
    age: number;
    email: string;
}

const FunctionalComp: FC<MyProps> = props => {
    return (
        <View style={styles.container}>
            <Text>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default FunctionalComp;
