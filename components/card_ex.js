import React from "react";
import { StyleSheet, Text, View, ImageBackground, 
    Image, SafeAreaView, TextInput, TouchableWithoutFeedback, 
    onPress, Alert, Component, TouchableOpacity } from 'react-native';
// import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';



export default class CustomText extends React.Component { 
    constructor(props) {
      super(props);
    } 
    // get prod(){
    //     return require(this.props.img);
    // }
    render() { 
        // var imgs = require("../assets/"+this.props.img);
        // const img_path =this.img;
    return(
        <Card borderRadius={10} cardStyle= {{ backgroundColor: 'transparent', borderRadius: 10 }} >
        <Card.Image source={require('../assets/furniture.jpg')}/>

            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
            {this.props.product}
            </Text>
            <Text style={styles.price} h4>
            {this.props.price}
            </Text>
            <Text h6 style={styles.description}>
            {this.props.time}
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={this.props.onPress} />
            <Button
            type="clear"
            title='Try Now'
            onPress={this.props.Press} />
    </Card>
    );
    }
    
}

CustomText.propTypes = { onPress: PropTypes.func.isRequired, img: PropTypes.string.isRequired, onPress: PropTypes.func.isRequired };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
      },
    imageBack: {
        flex: 1,
        alignContent: "center",
        resizeMode: "cover",
        // alignItems: "center",
      },
    topBack: {
        // flex: 1,
        backgroundColor: 'rgba(255, 50, 50, 0.5)',
        flexDirection: "row",
        justifyContent: "flex-start",
        // alignItems: "stretch",
        // flexWrap: "wrap",
        opacity: 1,
        padding: 12,
        paddingLeft: 0,
        // borderRadius: 8,
        // margin: 8
    },
    midBack: {
        alignContent: "center",
        alignItems: "center"
    },
    searchBox: {
        borderRadius: 18,
        padding: 8,
        height: 32,
        width: 280,
        alignSelf: "stretch",
        backgroundColor: "white",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
        height: 2,
        width: 2,
        },
        elevation: 3,
    },
    Iconn: {
        paddingHorizontal: 12,
    },
    name: {

        color: '#5a647d',

        fontWeight: 'bold',

        fontSize: 30

    },

    price: {

        fontWeight: 'bold',

        marginBottom: 10

    },

    description: {

        fontSize: 10,

        color: '#c1c4cd'

    }
});

