import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class InfoScreen extends Component {
    static navigationOptions = () => ({
        header: null,
    });
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
