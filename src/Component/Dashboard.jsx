import React from 'react';
import {useDispatch} from 'react-redux'
import SearchBox from './SearchBox';
import ListComp from './ListComp';
import { getAlbumdataAction } from '../Redux/appSlice';
import { useSelector } from 'react-redux'
import { Text } from 'react-native' ;
import ModalComp from './ModalComp';

const Dashboard = () => {
   


    // const {title:{label}} = albums

    return (
        <>
        <SearchBox/>
        <ModalComp />
        <ListComp/>
        </>
    )
}

export default Dashboard