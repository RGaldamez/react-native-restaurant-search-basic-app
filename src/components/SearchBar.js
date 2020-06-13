import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Text style={styles.searchText}> Search bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    alignSelf: 'center',
    height: '70%',
    width: '90%',
    marginTop: '2%',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 20,
    color: 'grey',
  },
});

export default SearchBar;
