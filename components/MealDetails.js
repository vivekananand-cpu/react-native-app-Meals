import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MealDetails = ({duration,complexity,affordability}) => {
    return (
        <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginBottom: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})
