import React from 'react';
import './life.less';
import {Calendar, Button, Badge, Row, Col} from 'antd';
import Child from './Child';
// import "antd/dist/antd.css";   // 引入官方提供的 less 样式入口文件

export default class Life extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			count: 1
		};
	}

	handleClick() {
		this.setState({
			count: this.state.count + 1
		}, () => {
			console.log(this.state.count);
		});	
	}
	listItemHandleClick(content) {
		console.log(content);
	}
	getListData(value) {
	  let listData;
	  switch (value.date()) {
	    case 8:
	      listData = [
	        { type: 'warning', content: 'This is warning event.' },
	        { type: 'success', content: 'This is usual event.' },
	      ]; break;
	    case 10:
	      listData = [
	        { type: 'warning', content: 'This is warning event.' },
	        { type: 'success', content: 'This is usual event.' },
	        { type: 'error', content: 'This is error event.' },
	      ]; break;
	    case 15:
	      listData = [
	        { type: 'warning', content: 'This is warning event' },
	        { type: 'success', content: 'This is very long usual event。。....' },
	        { type: 'error', content: 'This is error event 1.' },
	        { type: 'error', content: 'This is error event 2.' },
	        { type: 'error', content: 'This is error event 3.' },
	        { type: 'error', content: 'This is error event 4.' },
	      ]; break;
	    default:
	  }
	  return listData || [];
	}

	dateCellRender(value) {
	  const listData = this.getListData(value);
	  return (
	    <ul className="events">
	      {
	        listData.map(item => (
	          <li key={item.content} onClick={this.listItemHandleClick.bind(this, item.content)}>
	            <Badge status={item.type} text={item.content} />
	          </li>
	        ))
	      }
	    </ul>
	  );
	}

	getMonthData(value) {
	  if (value.month() === 8) {
	    return 1394;
	  }
	}

	monthCellRender(value) {
	  const num = this.getMonthData(value);
	  return num ? (
	    <div className="notes-month">
	      <section>{num}</section>
	      <span>Backlog number</span>
	    </div>
	  ) : null;
	}

	render () {
		return <div className="life">
			<p>React生命周期介绍</p>
			<Button type="success" onClick={this.handleClick}>Antd点击一下</Button>
			<br /><br />
			<div> 我是Live</div>
			{this.state.count}
			<Child count={this.state.count} />
			<Row>
				<Col span="12">234234</Col>
				<Col span="12">234234</Col>
			</Row>	
			<Calendar dateCellRender={this.dateCellRender.bind(this)} monthCellRender={this.monthCellRender.bind(this)} />
		</div>;
	}
}
