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
        marginVertical: 20
    },

    button:{
      backgroundColor: "#1c97cc"
    },

    buttonText:{
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },

    tabbar:{
        backgroundColor: "#f7f7f7",
        margin: 0,
        padding: 0
    },

    buttonTextTabBar:{
        fontSize: fontSize.small,
        fontFamily: fontFamily.regular
    },

    buttonTabBar:{
        backgroundColor: "#f7f7f7",
        borderWidth: 0,
        borderRadius: 0
    }
});

export default styles;
