import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { color } from '../styles/color';
const LoadingComponent = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={color.white} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.mainColor
    },
});

export default LoadingComponent;
