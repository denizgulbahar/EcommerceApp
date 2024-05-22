import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
export const GradientWrapper = ({ children }) => {
    return (
        <LinearGradient 
        colors={['#FFB347', '#FFCC33']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        {children}
      </LinearGradient>
    )
}
const styles = StyleSheet.create({
    gradient: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
})