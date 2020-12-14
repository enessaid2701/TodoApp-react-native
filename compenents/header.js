import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 18,
        backgroundColor: 'dimgray',
    },

    title: {
        textAlign: 'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    }
})