import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function LogList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isCalling, setCalling] = useState(false);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <TouchableOpacity onPress={() => { getMovies() }}>
        <Text>LogList</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({})