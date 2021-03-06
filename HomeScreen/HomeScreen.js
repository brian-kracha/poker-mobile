import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { hri } from 'human-readable-ids';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      roomName: '',
      randomRoomName: hri.random(),
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const roomName = this.state.roomName || this.state.randomRoomName;

    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('./assets/bram-naus-200967.jpg')} />
        <View style={styles.formView}>
          <Text style={styles.formTitle}>
            Poker4
            <Text style={{ fontWeight: '600' }}>Fun</Text>
          </Text>
          <TextInput
            style={styles.formInput}
            autoCapitalize="none"
            placeholder={this.state.randomRoomName}
            onChangeText={(roomName) => this.setState({ roomName })} />
          <Button
            title="Start or Join a session"
            onPress={() => navigate('Room', { room: roomName })} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formView: {
    position: 'absolute',
    top: '30%',
    left: 0,
    padding: '5%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    marginBottom: 5,
    fontSize: 26,
    fontWeight: '200',
    textAlign: 'center',
  },
  formInput: {
    width: 300,
    marginVertical: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    textAlign: 'center',
  }
});
