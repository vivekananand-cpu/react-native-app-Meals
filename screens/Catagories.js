import React from 'react'
import { FlatList, SafeAreaView, StyleSheet} from 'react-native';
import CatagoryGridTile from '../components/CatagoryGridTile.js';
import { CATEGORIES } from '../data/dummy-data.js';

const Catagories = ({navigation}) => {

    const renderCatagoryItem = (itemData) => {
        
        const pressHandler =()=>{
            navigation.navigate("Meals",{
                CategoryId:itemData.item.id
            });
        }

        return ( <CatagoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color}
            onPress={pressHandler}        
        />)
    }

    return (
        <SafeAreaView>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderCatagoryItem}
                contentContainerStyle={{ margin: 4 }}
                
            />
        </SafeAreaView>
    )
}

export default Catagories

const styles = StyleSheet.create({

})
