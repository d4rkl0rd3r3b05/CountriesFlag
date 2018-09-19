import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import ListItem from '../ListItem/ListItem';

class PlacesList extends Component {
    getImageURI = imageName => {
        return {uri: String("https://www.countries-ofthe-world.com/flags-normal/flag-of-"+ imageName +".png")}
    }

    render() {
        return (
            <FlatList style={styles.listContainer}
                      data={this.props.places}
                      renderItem={(info) => (
                        <TouchableOpacity onPress={() => this.props.onItemSelection(info.item)} >
                            <ListItem placeName={info.item.value}
                                      placeImage={this.getImageURI(info.item.value)}/>
                        </TouchableOpacity>
                      )}            
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
      width: "100%",
      padding: 10
    }
});

export default PlacesList;