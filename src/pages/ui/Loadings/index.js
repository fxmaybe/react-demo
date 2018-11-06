import React from 'react';
import { Card, Spin, Switch, Icon, Alert} from "antd";
import './index.less';

export default class Loadings extends React.Component {
	state = {
		loading: false
	}
	toggle = (value) => {
		this.setState({ loading: value });
	}

    render() {

        return (
            <div className="loadings-wrap">
                <Card className="card-wrap" title="Spin的用法">
					<Spin size="small" /> 
					<Spin /> 
					<Spin size="large" /> 
					<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
                </Card>
				<Card className="card-wrap" title="区域loading">
					<Spin>
						<div className="area-loading area-loading-example">
							<p>
								我是内容。。。
							</p>
							<p>
								我是内容。。。
							</p>
						</div>
					</Spin>
					<Spin tip="Loading...">
						<Alert
						className="area-loading"
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
						/>
					</Spin>
					<Spin tip="Loading..." indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}>
						<Alert
						className="area-loading"
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
						/>
					</Spin>
                </Card>
				<Card className="card-wrap" title="Loading控制">
					<div style={{ marginBottom: 16 }}>
						Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
					</div>
					<div style={{ marginBottom: 10 }}>
						无延时：
					</div>
					<Spin tip="Loading..." spinning={this.state.loading} indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}>
						<Alert
						className="area-loading"
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
						/>
					</Spin>
					<div style={{ marginBottom: 10 }}>
						无延时：（500ms内无效果，如果500ms结果还没返回，才显示loading，作用是接口数据如果非常快，通常接口都会有500ms内返回了，就不会有一闪的效果了，提升的是网速快的时候loading体验）
					</div>
					<Spin tip="Loading..." spinning={this.state.loading} delay={500} indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}>
						<Alert
						className="area-loading"
						message="Alert message title"
						description="Further details about the context of this alert."
						type="info"
						/>
					</Spin>
                </Card>
            </div>
        );
    }
}