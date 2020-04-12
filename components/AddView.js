import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, } from 'react-native';

export default class AddView extends Component {
    constructor(props){
        super(props);
        // init state
        this.state = {
            newTaskName: ''
        };
    }

    onAddNewTask = () => {
        this.props.onAddNewTask(this.state.newTaskName);
        // console.log("You clicked the button...");
        this.setState({ newTaskName: '' }); // reset init state
    }
    
	render() {
        // console.log("New task name from TextInput form: " + this.state.newTaskName);
		return (
			<View style = { styles.container }>
                <Text style = { styles.textStyle }> To Do App </Text>
                <View style = {{ flexDirection: 'row' }}>
                    <View style = { styles.input }>
                        <TextInput 
                            style = {{ fontSize: 16 }}
                            placeholder = 'Task name'
                            onChangeText = {(inputTaskName) => {
                                this.setState({ newTaskName: inputTaskName })
                            }}
                            value = {`${this.state.newTaskName}`}
                        />
                    </View>
                    <TouchableOpacity style = { styles.button } onPress = { this.onAddNewTask }>
                        <Text style = { styles.addTextStyle }> Add </Text>
                    </TouchableOpacity>
                </View>
			</View>
		);
	} 
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                height: 94,
                paddingTop: 20,
            },
            android: {
                height: 94
            }
        }),
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        // borderColor: 'black',
        // borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    input: {
        height: 38,
        width: 280,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
    },
    button: {
        height: 38,
        width: 48,
        // borderColor: 'black',
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f58f7',
        marginLeft: 20,
        borderRadius: 5,
    },
    addTextStyle: {
        color: 'white', 
        fontWeight: 'bold',
        fontSize: 18,
    }
});