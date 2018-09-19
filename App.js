/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import PlaceTextInput from './src/components/Input/PlaceTextInput';
import PlacesList from './src/components/List/PlacesList';
import DetailModel from './src/components/Model/DetailModel';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
      places: [],
      selectedPlace: null
  }

  onPressAddButton = (place) => {
    this.setState(previousState => {
      return {
        places: previousState.places.concat({
            value: place,
            key: Math.random()
        })
      }
    })
  }

  itemDeletionHandler = () => {
    this.setState(previousState => {
      return {
        places: previousState.places.filter((place) => {
            return (place.key !== this.state.selectedPlace.key);
        }),
        selectedPlace: null
      }
    });
  }

  modalDismissHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  itemSelectionHandler = (place) => {
    this.setState({
      selectedPlace: place
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <DetailModel place={this.state.selectedPlace} 
                     onItemDeleted={this.itemDeletionHandler}
                     onModalDismiss={this.modalDismissHandler} />
        <PlaceTextInput onPressAddButton={this.onPressAddButton}/>
        <PlacesList places={this.state.places} onItemSelection={this.itemSelectionHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
