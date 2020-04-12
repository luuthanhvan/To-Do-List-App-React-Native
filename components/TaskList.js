import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TaskList extends Component{

    renderItem = ({item, index}) => {
        const { onFinishedTask, onDeleteTask } = this.props;
        const iconUnfinished = <Icon name ='clock' type = 'evilicon' size = { 30 } />
        const iconFinished = <Icon name ='check' type = 'evilicon' size = { 30 } color = 'green'/>
        const iconDelete = <Icon name ='close' type = 'evilicon' size = { 30 } color = 'red'/>;
        
        return(
            <View style = { styles.container }>
                <View>
                    <TouchableOpacity onPress = {() => { onFinishedTask(index) }}>
                        { item.isFinished == true ?  iconFinished : iconUnfinished }
                    </TouchableOpacity>
                </View>

                <View style = {{ flex: 1 }}>
                    <Text style = {{ color: 'black', fontSize: 18 }}> { item.taskName } </Text>
                </View>

                <View>
                    <TouchableOpacity onPress = {() => { onDeleteTask(index) }}>
                        { iconDelete }
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    render(){
        return(
            <FlatList 
                data = { this.props.listData }
                renderItem = { this.renderItem }
                keyExtractor = {(item, index) => index}
                extraData = { this.props }
            />
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal : 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2,
    },
});