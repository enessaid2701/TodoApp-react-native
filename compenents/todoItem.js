import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TodoItem({ item, pressHandler, submitHandler }) {

    return (
        <View style={styles.item}>
            <TouchableOpacity>
                <Button onPress={() => pressHandler(item.key)} title='delete' color='coral' />
            </TouchableOpacity>
            <TextInput style={styles.item}>{item.text}
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,

    }
})