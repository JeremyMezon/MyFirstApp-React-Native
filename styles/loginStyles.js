import { StyleSheet} from "react-native";

const LoginStyles = StyleSheet.create({
    loginContainer: {
        width: "100%",
        flexDirection: 'column',
        marginLeft: 25,
        marginRight: 25,
        padding: 15,
        alignItems: "center"
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    logoLogin: {
        width: 200,
        height: 200,
    },
    responsiveImg: {
        width: 200,
    },
    inputLogin: {
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 5,
        marginBottom: 8,
        marginTop: 8,
        width: "90%",
    },
    loginComponents: {
        width: "100%",
        alignItems: "center",
    },
    loginButton: {
        marginTop: 15,
        padding: 15,
        backgroundColor: '#554371',
        width: '90%'
    },
    textLoginButton: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 14,
        textTransform: 'uppercase'
    },
});

export default LoginStyles;