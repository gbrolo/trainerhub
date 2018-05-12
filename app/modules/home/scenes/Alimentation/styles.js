import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1
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
