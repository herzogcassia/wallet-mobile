import { StyleSheet } from "react-native";
import colors from "../../Constants";

const styles = StyleSheet.create({
    button: {
        width: "60%",
        height: 81,
        paddingHorizontal: 60,
        paddingVertical: 16,
        borderRadius: 15,
        backgroundColor: colors.purple,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    }, 
    label: {
        color: 'white',
        fontSize: 18, 
        fontFamily: 'Quicksand'
    }
})

export default styles;