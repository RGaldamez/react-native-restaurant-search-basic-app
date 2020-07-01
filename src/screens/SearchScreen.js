import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
  // console.log('hi there');
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.layout}>
      <View>
        <SearchBar
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
      </View>
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
