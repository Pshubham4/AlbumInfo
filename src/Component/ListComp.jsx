import React from 'react' ;
import {FlatList, Text} from 'react-native'
import ListItem from './ListItem';
import {useSelector , useDispatch} from 'react-redux'
import { getAlbumdataAction } from '../Redux/appSlice';

const ListComp = () => {
    const dispatch = useDispatch()

    React.useEffect(()=>{
       dispatch(getAlbumdataAction())
    },[])

    const albums = useSelector(state => state?.appdata?.entry)

    // console.log(albums[0]["im:name"])

    return (
      <React.Fragment>
        {albums?.length > 0 ? (
          <FlatList
            numColumns={2}
            contentContainerStyle={{
              alignItems: 'center',
              borderWidth: 1,
            }}
            data={albums}
            renderItem={item => <ListItem data={item} />}
            keyExtractor={(item, index) => item?.id?.attributes['im:id']}
          />
        ) : null}
      </React.Fragment>
    );
}

export default ListComp