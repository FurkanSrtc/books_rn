import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen/index';
import DetailsScreen from '../screens/detailsScreen';
import { RootNavigatorProps } from '../types/rootNavigatorProps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Favourites from '../screens/favourites/index';
import SearchResult from '../screens/searchResult';

export default function RootNavigator() {
  const Stack = createStackNavigator<RootNavigatorProps>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: 'Books',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('FavouritesScreen')}>
              <Text>Favourites</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="BookDetailsScreen"
        component={DetailsScreen}
        options={{
          title: 'Book Details',
        }} />
      <Stack.Screen
        name="FavouritesScreen"
        component={Favourites}
        options={({ navigation }) => ({
          headerTitle: 'Favourites',
        })}
      />

      <Stack.Screen
        name="SearchScreen"
        component={SearchResult}
        options={({ navigation }) => ({
          headerTitle: 'Search Result',
        })}
      />

    </Stack.Navigator>
  )
}