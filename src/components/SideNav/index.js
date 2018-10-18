import React from 'react';
import { Menu, Icon } from "antd";
import './index.less';
import MenuConfig from '../../config/menuConfig';
import { NavLink } from "react-router-dom";

const SubMenu = Menu.SubMenu;

export default class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: 'sidenav'
        };
        
        this.handleClick = this.handleClick.bind(this);
        this.renderMenu = this.renderMenu.bind(this);
 
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        
        this.setState({
            menuTreeNode
        });
    }
    renderMenu(data) {
        return data.map(item => {
            if(item.children) {
               return <SubMenu title={item.title} key={item.key}>
                {this.renderMenu(item.children)}
               </SubMenu>
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    {item.title}     
                </NavLink>
            </Menu.Item>;
        });
    }

    handleClick(e) {
        console.log(e);
    }

    render() {
        return <div>
            <div className="logo">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <h1>
                    管理系统
                </h1>
            </div>
            <Menu theme="dark" mode="inline" selectedKeys={['/home']} onClick={this.handleClick} style={{ width: 'auto' }}>
                {this.state.menuTreeNode}
            </Menu>
        </div>;
    }
}