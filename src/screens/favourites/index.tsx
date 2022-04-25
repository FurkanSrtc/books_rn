import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RootNavigatorProps } from '../../types/rootNavigatorProps'
import { StackScreenProps } from '@react-navigation/stack'
import { useFavouritesProvider } from '../../providers/favouritesProvider';
import BookCard from '../../components/bookCard';

export default function Favourites({
  route,
  navigation,
}: StackScreenProps<RootNavigatorProps, 'FavouritesScreen'>) {
  const { favourites } = useFavouritesProvider();
  return (
    <View style={{flex:1}}>
     <FlatList data={favourites} renderItem={({ item }) => <BookCard key={item.id} book={item} onPress={() => navigation.navigate('BookDetailsScreen', { bookId: item.id })} />} />
    

    </View>
  )
}

const styles = StyleSheet.create({})