import { color } from "../../styles/color"
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, SafeAreaView } from "react-native"
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

export const ScreenWrapper = ({ children }) => {
    // KeyboardAV - When the keyboard is opened, scrolled screen content smoothly
    // SafeAV - Prevented notches on some phones from conflicting with screen content
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={0}
            enabled={true}
            style={styles.container}
        >
            <SafeAreaView
                style={{ flex: 1 }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{ flex: 1, paddingTop: 20, paddingBottom: 70 }}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>

                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.mainColor,
        paddingHorizontal: 5,
    }
})