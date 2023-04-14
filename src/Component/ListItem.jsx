import React from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from 'react-native-paper';

const ListItem = ({data}) => {
  let imageurl = data['im:image']?.filter(
    item => item?.attributes?.height == '170',
  );

  console.log(imageurl)
  return (
    <Card style={{width: 150, height: 170}}>
      <Image
        style={{width: '100%', height: '90%'}}
        source={{
          uri: 'https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/8a/15/f2/8a15f25d-9c48-368a-0b89-856ec9c5cd74/23UMGIM19648.rgb.jpg/170x170bb.png',
        }}
      />
      <Text
        variant="labelMedium"
        style={{textAlign: 'center', backgroundColor: 'grey', width: '100%'}}>
        {data['im:name']}
      </Text>
    </Card>
  );
};

export default ListItem;
