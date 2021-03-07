import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
import './styles.css';

const { Header, Content } = Layout;

export default function SiteLayout(props) {
  return (
    <Layout>
      <Header>
        <div className="logo" >
          <EyeOutlined spin />
          {'     '}
          Opticus
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">
              Overview
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/measure">
              Measure
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        {props.children}
      </Content>
    </Layout>
  );
}