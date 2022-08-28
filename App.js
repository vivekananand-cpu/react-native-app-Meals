import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import Catagories from './screens/Catagories';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light">

      </StatusBar>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Catagories" component={Catagories} />
        <Stack.Screen name="Meals" component={MealsOverviewScreen} />

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
