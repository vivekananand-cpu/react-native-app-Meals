import React from 'react'
import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MealDetails from '../components/MealDetails';

const MealItem = ({ id,title, image, duration, complexity, affordability }) => {

    const navigation = useNavigation();
    
    const selectMealItemHandler = ()=>{
        navigation.navigate('MealDetail',{
        mealId:id
    });
    }


    return (
        <View style={styles.container}>
            <Pressable
                onPress={selectMealItemHandler}
                android_ripple={{color:"#ccc"}}
                style={({pressed})=>(pressed ? styles.buttonPressed : null)}
            >
                <View style={styles.innerContainer}>
                    <View >
                        <Image
                            style={styles.image}
                            source={{
                                uri: image
                            }}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        affordability={affordability}
                        complexity={complexity}
                     />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginBottom:15,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 16,
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 }
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    buttonPressed:{
        opacity:0.35
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
  
})
