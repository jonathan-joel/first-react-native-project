import React from "react";
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import RepositoryList from '../organisms/RepositoryList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text style={{marginTop:50,fontSize: 40, fontWeight: 800, padding: 50, color:'blue',  justifyContent: 'center'}}>Articles Store and more...</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;