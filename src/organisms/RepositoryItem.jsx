import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import StyledText from '../atoms/StyledText';
import RepositoryStats from '../molecules/RepositoryStats';
import theme from '../theme';

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Image style={styles.image} source={{ uri: props.logoUrl}} />
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.fullName}
    </StyledText>
    <StyledText style={styles.description}>{props.description}</StyledText>
    <StyledText style={styles.language}>{props.language}</StyledText>
    <RepositoryStats {...props} />
  </View>
);


const styles = StyleSheet.create({
  container: {
    alignContent:"start"
    
  
  },
  description:{
    alignSelf:'center',
    fontSize:20,
    fontStyle: "children"
  },
  language: {
    padding: 1,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    
    alignSelf:"center",
    width: 80,
    height: 80,

    
  },
    
  
  
});

export default RepositoryItem;