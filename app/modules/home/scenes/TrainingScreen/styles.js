import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    },

    containerView:{
        marginTop: 20
    },

    button:{
      backgroundColor: "#1c97cc"
    },

    buttonStart:{
      backgroundColor: "#16ad25"
    },

    buttonRestart:{
      backgroundColor: "#ad114f"
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

    titleText: {
        fontSize: fontSize.regular + 4,
        fontFamily: fontFamily.bold,
        textAlign: "center"
    },

    infoText: {
        textAlign: "justify"
    }
});

export default styles;
