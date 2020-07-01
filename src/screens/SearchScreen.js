import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // console.log('hi there');
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  // console.log(results);
  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.layout}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // width: '100%',
    // height: '100%',
  },
  // restaurantList: {
  //   flex: 3,
  //   borderTopWidth: 1,
  //   borderColor: 'purple',
  // },
  // searchBar: {
  //   flex: 1,
  // },
});

export default SearchScreen;
