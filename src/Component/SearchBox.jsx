import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions
} from 'react-native';

const {width , height} = Dimensions.get('window')

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.inputStyle}
      placeholderTextColor={'white'}
      placeholder='Search here'
      />
      <TouchableOpacity style={styles.searchbtn}>
        <Text style={{fontSize:24 , color:'white',margin:10}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    height : height * 0.1,
    padding : 10,
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#28282B',
  
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: 'red',
    width : '70%',
    fontSize : 20,
    color:'white',
  },
  searchbtn : {
    borderWidth : 1,
    color : 'white',
    backgroundColor:'grey',
    borderRadius : 20,
    marginLeft : 10
  }
});

export default SearchBox;
