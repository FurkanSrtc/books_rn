import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootNavigatorProps } from '../../types/rootNavigatorProps'
import BooksAPI from '../../api/booksAPI';
import { Book } from '../../types/booksTypes';
import BookCard from '../../components/bookCard';

export default function SearchResult({ route, navigation }: StackScreenProps<RootNavigatorProps, 'SearchScreen'>) {
    const [books, setBooks] = React.useState<Book[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    React.useEffect(() => {
        setIsLoading(true);
        BooksAPI.SearchDetails(route.params.search).then((books) => {
            setBooks(books.results);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
        });
    }, [route.params.search]);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
    return (
        <View>
            <FlatList data={books} renderItem={({ item }) => <BookCard key={item.id} book={item} onPress={() => navigation.navigate("BookDetailsScreen", { bookId: item.id })} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})