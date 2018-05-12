import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    },

    containerView:{
        marginVertical: 20
    },

    button:{
      backgroundColor: "#1c97cc"
    },

    buttonText:{
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },

    infoContainer: {
        backgroundColor: "#f0f0f0",
        margin: 20,
        padding: 20
    },

    commentsContainer: {
        backgroundColor: "#f3f3f3",
        padding: 10,
        marginTop: 20
    },

    titleText: {
        fontSize: fontSize.regular + 4,
        fontFamily: fontFamily.bold,
        textAlign: "center"
    },

    subtText: {
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium,
        marginTop: 10
    },

    infoText: {
        textAlign: "justify"
    }

});

export default styles;
