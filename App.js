import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import AddView from './components/AddView';
import TaskList from './components/TaskList';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				{ taskName: 'Learn Redux', isFinished: false },
				{ taskName: 'Do assignment Computer Network', isFinished: true }
			]
		}
	}
	
	// using arrow function
	onAddNewTask = (newTaskName) => {
		const newTask = { taskName: newTaskName, isFinished: false };
		const newTaskList = [...this.state.data, newTask];
		this.setState({ data: newTaskList });
	}

	onFinishedTask = (index) => {
		let newTaskList = this.state.data;
		newTaskList[index].isFinished = true;
		this.setState({ data: newTaskList });
	}

	onDeleteTask = (index) => {
		let newTaskList = this.state.data.filter((item, i) => i != index);
		this.setState({ data: newTaskList });
	}

	render() {
		// console.log(this.state.data);
		console.disableYellowBox = true; // disable all warning
		return (
			<View style = { styles.container }>
				<StatusBar hidden = { true }/>
				<AddView onAddNewTask = { this.onAddNewTask }/>
				<TaskList 
					listData = { this.state.data }
					onFinishedTask = { this.onFinishedTask }
					onDeleteTask = { this.onDeleteTask }
				/>
			</View>
		);
	} 
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e6e6fa',
	}
});