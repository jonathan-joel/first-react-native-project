import React from 'react';
import { FlatList} from 'react-native';
import repositories from '../data/repositories.js';
import RepositoryItem from '../organisms/RepositoryItem';

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
    
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};

export default RepositoryList;