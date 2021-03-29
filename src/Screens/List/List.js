import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import actions from '../../redux/actions';
import {showMessage, hideMessage} from 'react-native-flash-message';
import InfiniteListCard from '../../Component/InfiniteListCard'
import Header from '../../Component/Header';
import strings from '../../constants/lang';
import Loader from '../../Component/Loader';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      incressSkip: 0,
    };
  }

  componentDidMount() {
    this.hitApiForUserData();
  }
  hitApiForUserData = () => {
    const {userArray, incressSkip} = this.state;
    actions
      .UserData({
        searchType: 'LEADERBOARD',
        limit: '4',
        skip: incressSkip,
      })
      .then(response => {
        this.setState({
          userArray: [...userArray, ...response.data],
          incressSkip: incressSkip + 4,
        });

        showMessage({
          type: 'success',
          message: 'loading...... ',
        });
      })
      .catch(error => {
        showMessage({
          type: 'danger',
          message: 'Login failed ',
        });

        console.log(error);
      });
  };

  render() {
    const {userArray} = this.state;
    return (
      <View style={{flex:1}}>
        {/* <Text onPress={this.hitApiForUserData}> hit</Text> */}
        <Header textData={strings.INFINITE_LIST} onBack={()=>alert("back ku jana hai ")}/>

        <FlatList
          data={userArray}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={() => <View style={{margin: 10}} />}
          renderItem={({item}) => <InfiniteListCard data={item} />}
          onEndReached={this.hitApiForUserData}
          onEndReachedThreshold={1}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({});
