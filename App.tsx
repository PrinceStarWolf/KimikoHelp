/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '././src/page/Home';
import ListAdmin from './src/page/ListAdmin';
import ListUser from './src/page/ListUser';
import ListMJ from './src/page/ListMJ';

export default function App () {
  const Stack = createNativeStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={ListAdmin} options={{animationTypeForReplace: 'push', animation:'slide_from_right'}} />
        <Stack.Screen name="User" component={ListUser} options={{animationTypeForReplace: 'push', animation:'slide_from_right'}} />
        <Stack.Screen name="MJ" component={ListMJ} options={{animationTypeForReplace: 'push', animation:'slide_from_right'}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
