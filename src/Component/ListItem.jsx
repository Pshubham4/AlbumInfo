import React from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from 'react-native-paper';

const ListItem = ({data}) => {
  let propdata = data?.item
  let imageurl = propdata['im:image']?.filter(
    item => item?.attributes?.height == '170',
  );


  return (
    <Card
      style={{
        width: 150,
        height: 170,
        marginHorizontal: '5%',
        marginVertical: '5%',
        overflow: 'hidden',
        backgroundColor:'grey'
      }}>
      <Image
        style={{width: '100%', height: '90%'}}
        source={{
          uri: imageurl[0]?.label,
        }}
      />
      <Text
        variant="labelMedium"
        style={{
          position: 'absolute',
          bottom: 0,
          textAlign: 'center',
          backgroundColor: 'grey',
          width: '100%',
        }}>
        {propdata['im:name']?.label}
      </Text>
    </Card>
  );
};

export default ListItem;
