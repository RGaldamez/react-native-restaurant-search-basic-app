import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search1" style={styles.searchIconStyle} />
      <TextInput placeholder="Search" style={styles.searchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 15,
    backgroundColor: '#dddddd',
    borderRadius: 8,
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 15,
    // alignSelf: 'center',
    // height: '70%',
    // width: '90%',
    // marginTop: '2%',
  },
  searchText: {
    // borderWidth: 1,
    // borderColor: 'black',
    flex: 1,
    fontSize: 18,
  },
  searchIconStyle: {
    fontSize: 35,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
