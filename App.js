/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, View } from 'react-native';

import PlaceTextInput from './src/components/Input/PlaceTextInput';
import PlacesList from './src/components/List/PlacesList';
import DetailModel from './src/components/Model/DetailModel';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/stores/actions/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  onPressAddButton = (place) => {
    this.props.onAddPlace(place);
  }

  itemDeletionHandler = () => {
    this.props.onDeletePlace();
  }

  modalDismissHandler = () => {
    this.props.onDeselectPlace();
  }

  itemSelectionHandler = (place) => {
    this.props.onSelectPlace(place);
  }

  render() {
    return (
      <View style={styles.container}>
        <DetailModel place={this.props.selectedPlace} 
                     onItemDeleted={this.itemDeletionHandler}
                     onModalDismiss={this.modalDismissHandler} />
        <PlaceTextInput onPressAddButton={this.onPressAddButton}/>
        <PlacesList places={this.props.places} onItemSelection={this.itemSelectionHandler}/>
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (place) => dispatch(selectPlace(place)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);