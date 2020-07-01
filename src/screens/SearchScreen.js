import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term, //or just term
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View style={styles.layout}>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
      </View>

      {/* <View style={styles.restaurantList}>
        <Text>List 1</Text>
      </View>
      <View style={styles.restaurantList}>
        <Text>List 2</Text>
      </View>
      <View style={styles.restaurantList}>
        <Text>List 3</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    // width: '100%',
    // height: '100%',
  },
  restaurantList: {
    flex: 3,
    borderTopWidth: 1,
    borderColor: 'purple',
  },
  searchBar: {
    flex: 1,
  },
});

export default SearchScreen;
