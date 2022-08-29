import React, {useLayoutEffect} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { MEALS ,CATEGORIES} from '../data/dummy-data';
import MealItem from './MealItem';

const MealsOverviewScreen = ({route,navigation}) => {

    const {CategoryId} = route.params;

    const displayMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(CategoryId) >= 0;
    });


   useLayoutEffect(()=>{
    const categoryTitle = CATEGORIES.find((category)=>category.id === CategoryId).title;
    navigation.setOptions({
        title:categoryTitle
    })
   },[CategoryId,navigation])

  

    const renderMealItem = (itemData) =>{
        item = itemData.item;

        const mealItemProps = {
            id:item.id,
            title:item.title,
            image:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity
        }

        return (
            <MealItem {...mealItemProps}/>
        )
    }

    return (
        <View>
            <FlatList
                data = {displayMeals}
                keyExtractor={(item)=>{
                    return item.id
                }}
                renderItem = {renderMealItem}

            />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({})
