import { Button, Dropdown, Menu, Typography } from 'antd';
import React from 'react';
import './Navbar.scss';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import { AppstoreOutlined } from '@ant-design/icons';

const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const items = [
		{
			key: 'home',
			label: 'Home',
			path: '/'
		},
		{
			key: 'about',
			label: 'About',
			path: '/about'
		},
		{
			key: 'listings',
			label: 'Listings',
			path: '/listings'
		},
		{
			key: 'contact',
			label: 'Contact',
			path: '/contact'
		}
	];

	const pathname = location.pathname;

	const handleClick = (path: string) => {
		navigate(path);
	};

	return (
		<div data-testid="navbar" className="navbar">
			<Link className="navbarLinkLogo" to="/">
				<img className="navbarLogoImg" src={logoImg} alt="logo" />
				<Typography.Text className="navbarLogo">Landchecker</Typography.Text>
			</Link>
			<Menu
				className="menuBar"
				selectedKeys={[pathname]}
				theme="light"
				mode="horizontal"
				style={{ flex: 1, minWidth: 0, background: '#fff', fontSize: 15 }}
			>
				{items.map((item) => (
					<Menu.Item key={item.path} onClick={() => handleClick(item.path)}>
						{item.label}
					</Menu.Item>
				))}
			</Menu>
			<Dropdown menu={{ items }} trigger={['click']} className="menuBarMobile">
				<AppstoreOutlined style={{ fontSize: 35 }} />
			</Dropdown>
			<div className="menuBarCta">
				<Link to="/register">
					<Button type="primary">Get Started</Button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
