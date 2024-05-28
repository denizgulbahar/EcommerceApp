import { View, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native"
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"

export const ScreenWrapper = ({ children, type }) => {
    const isFlatList = type === "flatlist";
    const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

    return (
        <KeyboardAvoidingView 
            behavior={behavior} 
            keyboardVerticalOffset={0} 
            style={styles.keyboardContainer}
        >  
            <SafeAreaView style={styles.safeAreaView}>
                <LinearGradient 
                    colors={['#FFB347', '#FFCC33']}
                    style={styles.linearGradient}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 1}}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        {isFlatList ? (
                            <View style={styles.contentContainer}>{children}</View>
                        ) : (
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <View style={styles.contentContainer}>{children}</View>
                            </ScrollView>
                        )}
                    </TouchableWithoutFeedback>
                </LinearGradient>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 70,
        paddingHorizontal: 5,
    }
});



 // KeyboardAV - When the keyboard is opened, scrolled screen content smoothly
    // SafeAV - Prevented notches on some phones from conflicting with screen content