import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class List extends Component {

	componentDidMount() {
		console.log('list mount');
	}

	renderHeader() {
		return <h1>{this.props.header}</h1>
	}

	render() {
		const child = [...this.props.children];

		if(this.props.reverse) {
			child.reverse();
		}

		return [
			this.renderHeader(),
			child.map((el, id) => <li key={id}>{el}</li>)
		];
	}
}

class OrderedList extends List {
	componentDidMount() {
		super.componentDidMount();

		console.log('ordered mount');
	}
	render() {
		return <ol>{super.render()}</ol>
	}
}

class UnorderedList extends List {
	renderHeader() {
		return <h2>{this.props.header}</h2>
	}
	render() {
		return <ul>{super.render()}</ul>
	}
}

class App extends Component {
	render() {
		const array = [1,2,3,4,5,6,'fsdf',"314"];
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<UnorderedList reverse header="1">{array}</UnorderedList>
				<OrderedList header="2">{array}</OrderedList>
			</div>
		);
	}
}

export default App;
