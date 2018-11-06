import React from 'react';
import { Menu, Icon, Button } from 'antd';
import './index.less';
import MenuConfig from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {toggleCollapsed} from './../../redux/action';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: [],
            rootSubmenuKeys: []
        };
    }
    componentWillMount = () => {
        console.log(this.props.collapsed); // undefined
        const menuTreeNode = this.renderMenu(MenuConfig);

        let rootSubmenuKeys = MenuConfig.map(item => {
            return item.key
        });

        let currentLink = window.location.hash.replace(/#|\?.*$/, '');
        let currentLinkParent = currentLink.replace(/\/[^\/]*\/?$/, '');
        this.setState({
            selectedKeys: [currentLink],
            openKeys: [currentLinkParent],
            rootSubmenuKeys,
            menuTreeNode
        });
    }
    componentWillReceiveProps = () => {
      console.log(this.props.location);
    }
    toggleCollapsed = () => {

        const {dispatch} = this.props;

        dispatch(toggleCollapsed(!this.props.collapsed));

    }
    renderMenu = (data) => {
        return data.map(item => {
            if(item.children) {
               return <SubMenu title={<span><Icon type={item.icon} /><span>{item.title}</span></span>} key={item.key}>
                {this.renderMenu(item.children)}
               </SubMenu>
            }
            return <MenuItem title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    <Icon type={item.icon ? item.icon : 'none'} />
                    <span>{item.title}</span>   
                </NavLink>
            </MenuItem>;
        });
    }

    handleClick = (e) => {
        
        this.setState({
            selectedKeys: [e.key]
        });
    }
    onOpenChange = (openKeys) => {
         const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
         if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
             this.setState({
                 openKeys
             });
         } else {
             this.setState({
                 openKeys: latestOpenKey ? [latestOpenKey] : [],
             });
         }
    }
    render() {
        return <div className={'side-nav'+ (!this.props.collapsed ? ' menu-open' : '')}>
            <div className="logo">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                <h1>
                    管理系统
                </h1>
            </div>
            <Menu 
                theme="dark" 
                mode="inline" 
                onOpenChange={this.onOpenChange} 
                openKeys={this.state.openKeys} 
                selectedKeys={this.state.selectedKeys} 
                onClick={this.handleClick} 
                inlineCollapsed={this.props.collapsed}
            >
                {this.state.menuTreeNode}
            </Menu>
            <Button type="primary" block onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
        </div>;
    }
}

const mapStateToProps = (state) => ({
        collapsed: state.collapsed
    });

export default connect(mapStateToProps)(SideNav);