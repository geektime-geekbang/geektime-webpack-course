import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/register';
import './index.less';

class Register extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      email: ''
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

  onRePasswordChange = (ev) => {
    this.setState({
      rePassword: ev.target.value
    });
  }

  onEmailChange = (ev) => {
    this.setState({
      email: ev.target.value
    });
  }

  register = () => {
    const { 
      username,
      password,
      rePassword,
      email
    } = this.state;

    if (password !== rePassword) {
      alert('两次输入的密码不一致');
      return;
    }

    this.props.register(username, password, email)
      .then(() => {
        alert('注册成功');
      });
  };

  render() {
    return (
      <div className="container">
        <h3>免费注册</h3>
        <div className="input-field-wrap">
          <input
            type="tel"
            placeholder="请输入用户名"
            maxlength="11"
            className="input-field"
            onChange={ this.onUsernameChange }
          />
        </div>
        <div className="input-field-wrap">
          <input
            type="text"
            placeholder="请输入邮箱"
            className="input-field"
            onChange={ this.onEmailChange }
          />
        </div>
        <div className="input-field-wrap">
          <input
            type="password"
            placeholder="请设置8-20位(数字+字符)密码"
            maxlength="20" className="input-field"
            onChange={ this.onPasswordChange }
          />
        </div>
        <div className="input-field-wrap">
          <input
            type="password"
            placeholder="请再次输入密码"
            maxlength="20"
            className="input-field"
            onChange={ this.onRePasswordChange }
          />
        </div>
        <div className="register-btn" onClick={ this.register }>确定</div>
        <div className="checke-type">
          <div className="login">已有账号，直接登录</div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  register: (username, password, email) => {
    return dispatch(register(username, password, email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);