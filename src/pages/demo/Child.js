import React from 'react';
import Child2 from './Child2'

export default class Child extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0	
		};
	}
	componentWillMount() {
		console.log('Child will mount');
	}
	componentDidMount() {
		console.log('Child did mount');
	}
	componentWillReceiveProps(newProps) {
		console.log('Child will receive props - ' + newProps.count);
	}
	render() {
		return <div>
			<div> 我是Child</div>
			{this.props.count}
			<Child2 count={this.props.count} />
		</div>;	
	}
}