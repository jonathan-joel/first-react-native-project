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
    marginBottom: 80,
    padding: 10,
    paddingBottom: 15,
    paddingTop: 15,
  },
  description:{
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 2,

  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 48,
    height: 50,
    alignSelf: 'center',
    
  },
    
  
  
});

export default RepositoryItem;