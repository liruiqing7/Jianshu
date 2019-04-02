import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox ,Input ,Button , LoginPic,LoginIpt}  from './style';
import { actionCreators } from './store';
import { Icon } from 'antd';

class Login extends PureComponent {
	render() {
		const {loginStatus} = this.props;
		if (!loginStatus){
			return (
				<LoginWrapper>
					<LoginBox>
						<h1>登录</h1>
						<LoginIpt>
						<Input placeholder='账号' ref={(input)=> {this.account = input}}/>
						<Input placeholder='密码' type='password' ref={(input)=> {this.password = input}}/>
						</LoginIpt>
						<Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
						<h6>------&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------</h6>
						<LoginPic>
							<Icon type="qq" className='InconPic'/> 
							<Icon type="wechat" className='InconPic'/> 
							<Icon type="weibo"  className='InconPic'/>
							<Icon type="alipay-circle" className='InconPic'/>
						</LoginPic>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	}
})

export default connect(mapState, mapDispatch)(Login);