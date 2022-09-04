import React from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';


const MealsDetails = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const headerButtonPress = () =>{
       
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight : () =>{
                return (
                    <IconButton icon="star" color="white" onPress={headerButtonPress} />
                )
            }
        })
    },[navigation,headerButtonPress])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{
                    uri: selectedMeal.imageUrl
                }}
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>


            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailsText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle text="Ingredients" />
                    <List data={selectedMeal.ingredients} />

                    <Subtitle text="Steps" />
                    <List data={selectedMeal.steps} />
                </View>
            </View>


        </ScrollView>
    )
}

export default MealsDetails

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:12
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailsText: {
        color: "green",
        fontWeight: "bold"
    },
    listOuterContainer:{
        alignItems:"center"
    },
    listContainer:{
        width:"80%"
    }



})
