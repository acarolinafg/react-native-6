import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Text, Image, FlatList, View } from 'react-native';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

export default Main = () => {
  const GET_POKEMONS = gql(`
  query pokemons($first: Int!) {
      pokemons(first: $first) {
        id
        number
        name
        image
        types
      }
    }
  `);

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });

  const renderItem = ({ item }) => {
    return (
      <View style={{ borderWidth: 1, borderColor: 'grey', flexDirection: 'row', flex: 1 }}>
        <Image className={'pokemon-image'} style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
        <View>
          <Text className={'pokemon-name'}>{item.number} - {item.name}</Text>
          {
            item.types.map(element => {
              return <Text className={'pokemon-type'}>{element}</Text>
            })
          }
        </View>
      </View>
    )
  };

  return (
    <ScrollView style={styles.container}>
      {loading ?
        <ActivityIndicator />
        :
        <FlatList
          data={data.pokemons}
          renderItem={renderItem}
        />
      };
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});