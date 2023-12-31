import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import StyledText from '../atoms/StyledText';
import RepositoryStats from '../molecules/RepositoryStats';
import theme from '../theme';

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.fullName}
    </StyledText>
    <StyledText>{props.description}</StyledText>
    <StyledText style={{ ...styles.language, textAlign: 'center' }}>
  {props.language}
</StyledText>
    <RepositoryStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15,
    paddingTop: 150,
  },
  language: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    
  },
});

export default RepositoryItem;