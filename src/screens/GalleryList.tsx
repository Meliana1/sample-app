import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  MD2Colors,
  Searchbar,
  Text,
} from 'react-native-paper';
import CardComponent from '../components/CardComponent';
import {ScrollView, View} from 'react-native';
import {PATH_URL} from '../constant/url.constant';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import {deviceWidth} from '../TabBar';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();
const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

function GalleryList() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageList, setImageList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(PATH_URL.LIST_PHOTO.url);
        setImageList(response?.data || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setImageList([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <ScrollView>
      <View style={{marginVertical: 10}}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      {isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        </View>
      ) : imageList?.length > 0 ? (
        imageList?.map((item: any, index) => (
          <View style={{marginBottom: 20}}>
            <CardComponent
              key={`${index}-item-image`}
              title={item?.author}
              subtitle={item?.url}
              uri={item?.download_url}
            />
          </View>
        ))
      ) : (
        <Text> Something is not right</Text>
      )}
    </ScrollView>
  );
  // <FlatList
  // <CardComponent />
  // <Card>
  //   <Card.Title
  //     title="Card Title"
  //     subtitle="Card Subtitle"
  //     left={LeftContent}
  //   />
  //   <Card.Content>
  //     <Text variant="titleLarge">Card title</Text>
  //     <Text variant="bodyMedium">Card content</Text>
  //   </Card.Content>
  //   <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
  //   <Card.Actions>
  //     <Button>Cancel</Button>
  //     <Button>Ok</Button>
  //   </Card.Actions>
  // </Card>
}

export default GalleryList;
