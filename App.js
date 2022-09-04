import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import Catagories from './screens/Catagories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetails from './screens/MealDeatailScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light">

      </StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#e60073"
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#e6e6ff"
            }
          }}>

          <Stack.Screen
            name="Catagories"
            component={Catagories}
            options={
              {
                title: "All Categories",

              }
            }

          />
          <Stack.Screen 
          name="Meals" 
          component={MealsOverviewScreen}
          // options={({route,navigation})=>{
          //   const {CategoryId} = route.params
          //   return {
          //       title:CategoryId
          //   };
          // }}

           />

           <Stack.Screen 
             name="MealDetail"
             component={MealsDetails}
            
           />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
