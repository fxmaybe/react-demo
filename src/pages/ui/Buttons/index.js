import React from 'react';
import { Card, Button, Radio, Icon } from "antd";
import './index.less';

const ButtonGroup = Button.Group;

export default class Buttons extends React.Component {
	state = {
		loading: false,
		size: 'large'
	}
	changeLoading = () => {
		this.setState({
			loading: true
		});
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 2000);
	}
	handleSizeChange = (e) => {
		this.setState({
			size: e.target.value
		});
	}
    render() {
    	const size = this.state.size;

        return (
            <div className="buttons-wrap">
                <Card className="card-wrap" title="普通按钮">
                    <Button type="primary">button</Button>
                    <Button>button</Button>
                    <Button type="dashed">button</Button>
                    <Button type="danger">button</Button>
                    <Button disabled>button</Button>
                </Card>
                <Card className="card-wrap" title="图形按钮">
                    <Button icon="plus">button</Button>
                    <Button icon="edit" type="primary">button</Button>
                    <Button type="dashed" icon="tool">button</Button>
                    <Button type="danger" icon="delete">button</Button>
                    <Button disabled icon="plus">button</Button>
                </Card>
                <Card className="card-wrap" title="Loading按钮">
                    <Button type="primary" loading>请稍候...</Button>
                    <Button type="primary" loading={this.state.loading} onClick={this.changeLoading}>{this.state.loading ? 'loading...' : 'Click me!'}</Button>
                    <Button shape="circle" loading />
       				<Button type="primary" shape="circle" loading />
       				<Button icon="edit" loading={this.state.loading} onClick={this.changeLoading}>{this.state.loading ? 'loading...' : 'Click me!'}</Button>
                </Card>
                <Card className="card-wrap" title="按钮尺寸">
                	<Radio.Group value={size} onChange={this.handleSizeChange}>
			          <Radio.Button value="large">Large</Radio.Button>
			          <Radio.Button value="default">Default</Radio.Button>
			          <Radio.Button value="small">Small</Radio.Button>
			        </Radio.Group>
			        <br /><br />
                    <Button size={this.state.size} type="primary">button</Button>
                    <Button size={this.state.size}>button</Button>
                    <Button size={this.state.size} type="dashed">button</Button>
                    <Button size={this.state.size} type="danger">button</Button>
                    <Button size={this.state.size} disabled>button</Button>
                </Card>
                <Card className="card-wrap card-btn-group" title="按钮组">
	                <h4>Basic</h4>
				    <ButtonGroup>
				      <Button>Cancel</Button>
				      <Button>OK</Button>
				    </ButtonGroup>
				    <ButtonGroup>
				      <Button disabled>L</Button>
				      <Button disabled>M</Button>
				      <Button disabled>R</Button>
				    </ButtonGroup>
				    <ButtonGroup>
				      <Button>L</Button>
				      <Button>M</Button>
				      <Button>R</Button>
				    </ButtonGroup>
				    <br /><br />
				    <h4>With Icon</h4>
				    <ButtonGroup>
				      <Button type="primary">
				        <Icon type="left" />Go back
				      </Button>
				      <Button type="primary">
				        Go forward<Icon type="right" />
				      </Button>
				    </ButtonGroup>
				    <ButtonGroup>
				      <Button type="primary" icon="cloud" />
				      <Button type="primary" icon="cloud-download" />
				    </ButtonGroup>
				</Card>
                <Card className="card-wrap card-tl" title="通栏按钮">
                    <Button type="primary" block>Primary</Button>
				    <Button block>Default</Button>
				    <Button type="dashed" block>Dashed</Button>
				    <Button type="danger" block>danger</Button>
                </Card>
            </div>
        );
    }
}