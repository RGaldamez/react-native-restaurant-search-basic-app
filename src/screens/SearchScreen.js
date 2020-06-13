import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  return (
    <View style={styles.layout}>
      <View>
        <SearchBar />
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
