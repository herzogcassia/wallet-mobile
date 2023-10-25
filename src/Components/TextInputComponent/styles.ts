import { StyleSheet } from "react-native";
import colors from "../../Constants";

const styles = StyleSheet.create({
    container: {
        gap: 10,
        borderRadius: 15,
        paddingHorizontal: 10,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.gray
    },
    input: {
        width: '90%',
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
});

export default styles;