import Favourites from '../screens/favourites/index';

export type RootNavigatorProps = {
    HomeScreen: { },
    BookDetailsScreen: {bookId: number},
    FavouritesScreen: { },
    SearchScreen: { search : string },
}
