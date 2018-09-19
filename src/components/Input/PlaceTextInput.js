import React, { Component } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

class PlaceTextInput extends Component {
  state = {
    place: ""
  }

  onInputTextChange = text => {
    this.setState({
      place: text
    });
  }

  onPressAddButton = () => {
    if (this.state.place.trim() === "") {
      return
    }

    this.setState(previousState => {
      return {
        place: ""
      }
    });

    this.props.onPressAddButton(this.state.place);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Place Name"
          style={styles.inputText}
          onChangeText={this.onInputTextChange}
          value={this.state.place}
        />

        <Button
          style={styles.inputButton}
          onPress={this.onPressAddButton}
          title="Add"
          color="green"
          accessibilityLabel="Add Place Button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    padding: 10
  },
  inputText: {
    width: "80%",
    borderBottomWidth: 0.5
  },
  inputButton: {
    width: "20%",
    backgroundColor: "green"
  }
});

export default PlaceTextInput;