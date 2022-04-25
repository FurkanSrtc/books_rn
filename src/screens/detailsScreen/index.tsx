import { View, Image, Text } from 'react-native'
import React from 'react'
import { RootNavigatorProps } from '../../types/rootNavigatorProps';
import { StackScreenProps } from '@react-navigation/stack';
import { Book } from '../../types/booksTypes';
import BooksAPI from '../../api/booksAPI';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFavouritesProvider } from '../../providers/favouritesProvider';
import { AntDesign } from '@expo/vector-icons';


export default function DetailsScreen({ route, navigation }: StackScreenProps<RootNavigatorProps, 'BookDetailsScreen'>) {
  const { bookId } = route.params;
  const [book, setBook] = React.useState<Book>();
  const { addToFavourites, checkToFavorite } = useFavouritesProvider();

  React.useEffect(() => {
    BooksAPI.BookDetails(bookId.toString()).then((book) => {
      setBook(book);
    });
  }, []);

  if (!book) {
    return null;
  }
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image source={{ uri: book?.formats['image/jpeg'] }} style={{ height: 120, width: 100, resizeMode: "contain" }} />
        </View>
        <View style={{ flex: 1, paddingLeft: 5, paddingRight:16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: "bold" }} numberOfLines={2}>{book?.title}</Text>

            {checkToFavorite(book) ? (
              <AntDesign name="heart" size={28} color="red" onPress={() => addToFavourites(book)} />
            ) : (
              <AntDesign name="hearto" size={28} color="black" onPress={() => addToFavourites(book)} />
            )}
          </View>
          <View>
            {book?.authors.map((author) => (
              <Text key={author.name}>{author.name}</Text>
            ))}
          </View>

          <View style={{ flexDirection: "row" }}>
            <AntDesign name="download" size={20} color="black" />
            <Text>{book?.download_count}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", paddingTop: 10 }}>Subjects</Text>

        {book?.subjects.map((subject) => (
          <Text key={subject}>{subject}</Text>
        ))}
      </View>

    </View>
  )
}