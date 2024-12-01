import * as React from 'react';
import {Avatar, Button, Card, Icon, IconButton, Text} from 'react-native-paper';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

interface CardComponentInterface {
  title: string;
  subtitle: string;
  uri: string;
  key: string;
}
const CardComponent = (props: CardComponentInterface) => {
  const {title, subtitle, uri, key} = props;
  return (
    <Card key={key}>
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Cover source={{uri: uri}} />
      <Card.Actions>
        <IconButton icon={'cards-heart-outline'} size={20} onPress={() => {}} />
        <IconButton icon={'share-variant'} size={20} onPress={() => {}} />
      </Card.Actions>
    </Card>
  );
};

export default CardComponent;
