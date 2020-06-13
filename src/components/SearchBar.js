import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={30} color="#FFFFFF" />
      {/* <Text style={styles.searchText}> Search bar</Text> */}
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
