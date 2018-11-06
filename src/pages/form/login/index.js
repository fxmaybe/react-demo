import React from 'react';
import { Card, Icon, Button, message, Form, Input, Checkbox} from "antd";
import './index.less';

const FormItem = Form.Item;

class FormLogin extends React.Component {
	constructor(props) {
		super(props)
	}
	handleSubmit = () => {
		let userInfo = this.props.form.getFieldsValue();
		console.log(userInfo);
        this.props.form.validateFields((err,values) => {
            if(err){
                return;
			}

			message.success(`${userInfo.acct} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.pwd}`)
        })
	}

    render() {
		const {getFieldDecorator} = this.props.form;
        return (
            <div className="form-login-wrap">
                <Card className="card-wrap" title="行内表单">
					<Form layout="inline">
						<FormItem>
							<Input placeholder="请输入帐号" />
						</FormItem>
						<FormItem>
							<Input placeholder="请输入密码" />
						</FormItem>
						<FormItem>
							<Button type="primary">
								Log in
							</Button>
						</FormItem>
					</Form>
                </Card>
				<Card className="card-wrap" title="块级表单">
					<Form style={{width: 300}}>
						<FormItem>
							{
								getFieldDecorator('acct', {
									initialValue: '123',
									rules: [
										{
											required: true,
											message: '请输入帐号',
										}, {
											pattern: /^\w{5,10}$/,
											message: '帐号必须是5-10个英文字符'
										}
									]
								})(
									<Input prefix={<Icon type="user" />} placeholder="请输入帐号" />
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('pwd', {
									initialValue: '',
									rules: [
										{
											required: true,
											message: '请输入密码'
										}, {
											pattern: /(?!^[a-z]{8,20}$)(?!^[A-Z]{8,20}$)(?!^\d{8,20}$)(?!^_{8,20}$)^[a-zA-Z\d_]{8,20}$/,
											message: '密码长度为8-20，必须包含大写字母、小写字母、数字、下划线中的两种'
										}
										// , {
										// 	validator(rule, value, callback) {
										// 		console.log(rule, value);
										// 	}
										// }
									],
									
								})(<Input prefix={<Icon type="lock" />} placeholder="请输入密码" />)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('rem', {
									valuePropName: 'checked',
									initialValue: true
								})(<Checkbox>记住密码</Checkbox>)
								
							}
							<a className="fr" href="#">忘记密码</a>
							<Button type="primary" block onClick={this.handleSubmit}>
								Log in
							</Button>
						</FormItem>
					</Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);