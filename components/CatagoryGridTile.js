import React from 'react'
import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';


const CatagoryGridTile = ({ title, color ,onPress}) => {


    return (
        <View style={[styles.grid , {backgroundColor:color}]}>
            <Pressable 
                onPress={onPress}
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.text}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CatagoryGridTile;

const styles = StyleSheet.create({
    grid: {
        flex: 2,
        margin: 16,
        height: 150,
        borderRadius: 4,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible"

    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        justifyContent: "center",
        borderRadius:8

    },
    text: {
        fontWeight: "bold",
        fontSize: 15,
        color:"white"
    }
});
