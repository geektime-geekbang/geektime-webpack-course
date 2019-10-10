import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/login';
import './index.less';

class Login extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange = (ev) => {
    this.setState({
      username: ev.target.value
    });
  }

  onPasswordChange = (ev) => {
    this.setState({
      password: ev.target.value
    });
  }

  login = () => {
    const { 
      username,
      password
    } = this.state;


    this.props.login(username, password)
      .then(() => {
        alert('登录成功');
      });
  };

  render() {
    return (
      <div className="container">
        <h3>账号密码登录</h3>
        <div className="safe-tips">为了你的帐号安全，请注意周围环境</div>
        <div className="input-field-wrap">
          <input
            type="text"
            placeholder="请输入用户名"
            maxlength="11"
            className="input-field"
            onChange={ this.onUsernameChange }
          />
        </div>
        <div className="input-field-wrap">
          <input
            type="input"
            placeholder="请输入密码"
            className="input-field"
            onChange={ this.onPasswordChange }
          />
        </div>
        <div className="login-btn" onClick={ this.login }>登录</div>
        <div className="checke-type">
          <div className="register">免费注册</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    return dispatch(login(username, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);