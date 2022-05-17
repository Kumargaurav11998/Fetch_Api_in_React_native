import {Avatar, Card} from '@rneui/base';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
  ScrollView,
  View,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {UserAction} from '../../Action/UserAction';
import {styles} from './HomeStyle';
function HomeScreen() {
  const [userlist, setuserlist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    Userlist();
  }, []);
  const Userlist = () => {
    dispatch(UserAction.GetUserList()).then(async data => {
      console.log(data, '------------');
      if (data) {
        setuserlist(data.data);
        setIsFetching(false);
      } else {
        ToastAndroid.show('Something went Wrong', ToastAndroid.SHORT);
      }
    });
  };

  const onRefresh = async () => {
    setIsFetching(true);
    Userlist();
  };
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.header]}>User Details</Text>
      <FlatList
        data={userlist}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={onRefresh}
        refreshing={isFetching}
        ListEmptyComponent={() => {
          return <Text style={[styles.emptytxt]}>Didn't get list</Text>;
        }}
        renderItem={({item}) => {
          return (
            <Card
              containerStyle={[styles.cardoutersty]}
              wrapperStyle={[styles.cardInndersty]}>
              <View>
                <Avatar rounded size={54} source={{uri: item.avatar}} />
              </View>
              <View style={{marginLeft: '8%'}}>
                <Text style={[styles.txt]}>
                  {item.first_name} {item.last_name}
                </Text>
                <Text style={[styles.txt]}>{item.email}</Text>
              </View>
            </Card>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
