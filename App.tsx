import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigators/rootNavigator';
import { FavouritesProvider } from './src/providers/favouritesProvider';

export default function App() {
  return (
    <FavouritesProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </FavouritesProvider>
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
