import React from "react";
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import RepositoryList from '../organisms/RepositoryList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate Repositorio aplicacion</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
