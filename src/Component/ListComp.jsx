import React from 'react' ;
import {FlatList, Text} from 'react-native'
import ListItem from './ListItem';
import {useSelector} from 'react-redux'

const ListComp = () => {

    const albums = useSelector(state => state?.appdata)
    const {entry} = albums
    // console.log(entry[0]["im:name"])
    console.log(entry[0]["im:image"])

    return (
        <React.Fragment >
            <FlatList
                data={entry}
                renderItem={(item)=><ListItem data={item}/>}
                keyExtractor={(item, index)=>item?.id?.attributes['im:id']}
            />
        </React.Fragment>
    )
}

export default ListComp