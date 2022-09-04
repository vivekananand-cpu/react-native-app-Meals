import { StyleSheet, Text, View } from 'react-native'

const Subtitle = ({text}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subTitle}>{text}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer:{
        borderBottomWidth:1,
        borderBottomColor:"#333333",
        margin:5,
       
    },
    subTitle: {
        color:"#333333",
        fontSize: 18,
        fontWeight: "bold",
        margin: 6,
        textAlign: "center",
        padding: 6,
    },
})
