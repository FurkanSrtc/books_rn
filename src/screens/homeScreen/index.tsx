import { FlatList, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BooksAPI from '../../api/booksAPI'
import { Book } from '../../types/booksTypes';
import BookCard from '../../components/bookCard';
import { StackScreenProps } from '@react-navigation/stack';
import { RootNavigatorProps } from '../../types/rootNavigatorProps';
import { SearchBar } from 'react-native-elements';

export default function HomeScreen({
  route,
  navigation,
}: StackScreenProps<RootNavigatorProps, "HomeScreen">) {

  const [page, setPage] = React.useState(1);
  const [allBooks, setAllBooks] = React.useState<Book[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [canMoreContent, setCanMoreContent] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');

  const loadMore = () => {
    if (!canMoreContent) {
      return;
    }
    setIsLoading(true);
    BooksAPI.ListBooks(page + 1).then((books) => {
      setAllBooks([...allBooks, ...books.results]);
      setPage(page + 1);
      setIsLoading(false);
      if (books.results.length < 32) {
        setCanMoreContent(false);
      }
    });
  };

  React.useEffect(() => {
    loadMore();
  }, []);

  const onSearchSubmit = () => {
  Keyboard.dismiss();
  navigation.navigate('SearchScreen', {search: encodeURI(searchText)});
  };
  return (
    <View>


      <SearchBar
        platform="ios"
        placeholder="Search Book..."
        onChangeText={val => {
          setSearchText(val);
        }}
        onSubmitEditing={() => onSearchSubmit()}
        value={searchText}
      />
      <FlatList data={allBooks} renderItem={({ item }) => <BookCard key={item.id} book={item} onPress={() => navigation.navigate("BookDetailsScreen", { bookId: item.id })} />} onEndReached={loadMore}
        ListHeaderComponent={() => <View style={{ flexDirection: 'row', backgroundColor: "white", marginVertical: 10, paddingVertical: 10 }}>

        </View>} />

    </View>
  )

  const styles = StyleSheet.create({})
}