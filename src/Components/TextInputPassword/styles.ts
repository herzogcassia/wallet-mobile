import { StyleSheet } from "react-native";
import colors from "../../Constants";

const styles = StyleSheet.create({
    container: {
        gap: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray
    },
    input: {
        width: '80%',
        height: 65,
        paddingHorizontal: 10,
        borderColor: 'gray',
        color: 'black',
    },
    label: {
        fontSize: 16,
        color: 'blue',
        marginVertical: 10

    },
    button: {
        width: '100%',
        height: 58,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderColor: 'blue',
        backgroundColor: 'lightblue',
    },
});

export default styles;