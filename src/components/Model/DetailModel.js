import React, { Component } from 'react';
import { Modal, Image, View, Button, Text, StyleSheet } from 'react-native';

class DetailModel extends Component {
    getImageURI = imageName => {
        return { uri: String("https://www.countries-ofthe-world.com/flags-normal/flag-of-" + imageName + ".png") }
    }

    render() {
        let modelContent = null
        if (this.props.place !== null) {
            modelContent = (
                <View style={styles.infoView}>
                    <Text style={styles.title}>{this.props.place.value}</Text>
                    <Image source={this.getImageURI(this.props.place.value)} style={styles.placeImage} />
                </View>
            );   
        }
        return (
            <Modal animationType="slide"
                   visible={this.props.place !== null}
                   onRequestClose={this.props.onModalDismiss} >
                <View style={styles.modalContainer}>
                    {modelContent}
                    <View style={styles.footerView}>
                        <Button title="Delete" onPress={this.props.onItemDeleted} />
                        <Button title="Dismiss" onPress={this.props.onModalDismiss} />
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 40,
        justifyContent: "space-between",
    },
    infoView: {
        width: "100%",
        height: "80%",
        alignItems: "center"
    },
    footerView: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: 32
    },
    placeImage: {
        width: "80%",
        height: "50%"
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 30
    }
});

export default DetailModel;