import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function DefaultLayout(props) {
  const history = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
        <Menu.Item>
        <Link to='/'
        >
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          
          to="/userbookings"
        >
          Bookings
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
         
          to="/admin"
        >
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          history('/login');
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
          <Row gutter={16} justify='center'>
          
              <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
             <h1 ><b><Link to='/' style={{color:'orangered'}}>Prativaahan</Link></b></h1>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
              </Col >
          
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

      <div className="footer text-center">
      <hr />

           <p>Desinged and Developed By</p>

           

           <p>Prativaahan Developers</p>
          
      </div>
    </div>
  );
}

export default DefaultLayout;
