import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';


const MealsDetails = ({ route, navigation }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);
    return (
        <View>
            <Image 
            source={{
                uri:selectedMeal.imageUrl
            }}
            style={styles.image}
             />
            <Text style={styles.title}>{selectedMeal.title}</Text>
           <MealDetails
            duration={selectedMeal.duration}  
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            />

            <Text>Ingredients</Text>
            {
                selectedMeal.ingredients.map((ingredient)=>(
                    <View key={ingredient}>
                        <Text>{ingredient}</Text>
                    </View>
                ))
            }
            <Text>Steps</Text>
            {
                selectedMeal.steps.map((step)=>(
                    <View key={step}>
                        <Text>{step}</Text>
                    </View>
                ))
            }

        </View>
    )
}

export default MealsDetails

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center'
    }
   
})
