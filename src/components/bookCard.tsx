import { View, Text, Image } from 'react-native'
import React from 'react'
import { Book } from '../types/booksTypes'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface BookCardProps {
    book: Book,
    onPress: () => void
}

export default function BookCard(props : BookCardProps) {
    const { book, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', padding: 16, flex: 1 }}>
            <View>
                <Image source={{ uri: book.formats['image/jpeg'] }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
            </View>
            <View style={{ flex: 1, }}>
                <Text style={{ fontWeight: "bold" }} numberOfLines={2}>{book.title}</Text>

                <View>
                    {book.authors.map((author, index) => (
                        <Text key={index}>{author.name}</Text>
                    ))}
                </View>

                <View style={{ flexDirection: "row"}}>
                    <AntDesign name="download" size={20} color="black" />
                    <Text>{book.download_count}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}