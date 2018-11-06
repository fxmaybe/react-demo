import React from 'react';
import { Card, Icon, Tabs, message} from "antd";
import './index.less';

const TabPane = Tabs.TabPane;

export default class _Tabs extends React.Component {
	constructor(props) {
		super(props)
	}

	handleChange = (val) => {
		message.info(val);
	}

    render() {
        return (
            <div className="tabs-wrap">
                <Card className="card-wrap" title="基础">
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
						<TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
						<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
					</Tabs>
                </Card>
				<Card className="card-wrap" title="禁用">
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						<TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
						<TabPane tab="Tab 2" disabled key="2">Content of Tab Pane 2</TabPane>
						<TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
					</Tabs>
                </Card>
				<Card className="card-wrap" title="带图标">
					<Tabs defaultActiveKey="1" onChange={this.handleChange}>
						<TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
						<TabPane tab={<span><Icon type="android" />Tab 1</span>} key="2">Content of Tab Pane 2</TabPane>
					</Tabs>
                </Card>
            </div>
        );
    }
}