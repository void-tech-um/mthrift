import React from 'react';
import { Image, FlatList } from 'react-native';

const imageArray = [
  {
    key: '1',
    image: require('./image1.jpg'),
  },
  {
    key: '2',
    image: require('./image2.jpg'),
  },
  // ...
];

const SellingGrid = () => {
  return (
    <FlatList
      numColumns={3}
      data={imageArray}
      renderItem={({ item }) => (
        <Image source={item.image} style={{ width: 100, height: 100 }} />
      )}
    />
  );
};

export default SellingGrid;
