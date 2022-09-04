import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const IconButton = ({onPress,icon,color}) => {
    return (
       <Pressable
        style={({pressed})=>pressed ? styles.pressed : null}
        onPress={onPress}>
            <Ionicons name={icon} size={24} color={color} />
       </Pressable>
    )
}

export default IconButton

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})
