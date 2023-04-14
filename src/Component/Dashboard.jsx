import React from 'react';
import {useDispatch} from 'react-redux'
import SearchBox from './SearchBox';
import ListComp from './ListComp';
import { getAlbumdataAction } from '../Redux/appSlice';
import { useSelector } from 'react-redux'
import { Text } from 'react-native' ;

const Dashboard = () => {
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getAlbumdataAction())
    },[])

    const albums = useSelector(state => state?.appdata)

    // const {title:{label}} = albums

    return (
        <>
        <SearchBox/>
        <Text>{'title'}</Text>
        <ListComp/>
        </>
    )
}

export default Dashboard