import { BooksObject, Book } from '../types/booksTypes';
import http from './http-common';

const ListBooks = async (page: number) => {
  const response = await http.get<BooksObject>(`/books?page=${page}`);
  return response.data;
};

const BookDetails = async (bookId: string) => {
  const response = await http.get<Book>(`/books/${bookId}`);
  return response.data;
};

const SearchDetails = async (search: string) => {
  const response = await http.get<BooksObject>(`/books?search=${search}`);
  return response.data;
};
const BooksAPI = {
  ListBooks, BookDetails, SearchDetails,
};

export default BooksAPI;
