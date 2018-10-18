import React from 'react';

export default class Child2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0	
		};
	}
	componentWillMount() {
		console.log('Child2 will mount');
	}
	componentDidMount() {
		console.log('Child2 did mount');
	}
	componentWillReceiveProps(newProps) {
		console.log('Child2 will receive props - ' + newProps.count);
	}
	render() {
		return <div>
			<div> 我是Child2</div>
			{this.props.count}
		</div>;	
	}
}