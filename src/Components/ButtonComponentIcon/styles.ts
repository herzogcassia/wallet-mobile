import { StyleSheet } from "react-native";
import colors from "../../Constants";

const styles = StyleSheet.create({
    button: {
        width: "45%",
        height: 81,
        paddingVertical: 16,
        flexDirection: 'row',
        gap: 10,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    label: {
        fontSize: 16,
        fontFamily: 'Quicksand'
    }
})

export default styles;