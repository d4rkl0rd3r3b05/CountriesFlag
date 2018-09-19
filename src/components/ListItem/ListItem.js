import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Image style={styles.listImage} 
          source={props.placeImage} />
               
        <Text>{props.placeName}</Text>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        marginTop: 4,
        flexDirection: "row"
    },
    listImage: {
        height: 60,
        width: 60,
        marginRight: 15
    }
});
export default ListItem;