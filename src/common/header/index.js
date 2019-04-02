import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import { Icon } from 'antd';
import { actionCreators }  from './store';
import {actionCreators as loginActionCreators } from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList,
	Addition,
	Button,
	SearchWrapper
} from './style';

class Header extends Component {

	getListArea() {
		const { focused, list, page , totalPage, mouseIn ,
			handleMouseEnter , handleMouseLeave, handleChangePage} = this.props;
		const newList = list.toJS();
		const pageList = [];

		if(newList.length) {
			for (let i = (page - 1) * 10 ;i < page *10 ; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
		
		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter = {handleMouseEnter}
					onMouseLeave = {handleMouseLeave}
				>
					<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch 
							onClick={() => handleChangePage(page , totalPage , this.spinIcon)}
							>
							<Icon type="sync" ref={(icon) => {this.spinIcon = icon}} className='spin '/>
							换一批
							</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
					{ pageList }			
					</SearchInfoList>
				</SearchInfo>
			)
		}else{
			return null;
		}
}
	render(){
		const { focused, handleInputFocus, handleInputBlur , list ,login ,logout} = this.props;
		return (
		<HeaderWrapper> 
			<Link to='/'>
				<Logo />
			</Link>
			<Nav>
				<Link to='/'><NavItem className='left active'>首页</NavItem></Link>
				<Link to='/'><NavItem className='left'>下载App</NavItem></Link>
				{ 
					login ? 
					<NavItem  onClick={ logout } className='right'>退出</NavItem> : 
					<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
				}				
				<NavItem className='right'>
					<Link to='/'><Icon type="cloud" /></Link>
				</NavItem>
				<SearchWrapper>
				<CSSTransition
					in={focused}
					 timeout={200}
					 classNames="slide"
					 >
					<NavSearch
						className={focused ?  'focused' : ''}
						onFocus={() => handleInputFocus(list)}
						onBlur={handleInputBlur}
					></NavSearch>
				</CSSTransition>
			<Icon className={focused ?  'focused iconfont' : 'iconfont'} type="search" />
				{this.getListArea()}
			</SearchWrapper>
		</Nav>
			<Addition>
			<Link to='/Write'>
				<Button className='writting'><Icon type="edit" />写文章</Button>
			</Link>
			<Link to='/'><Button className='reg'>注册</Button></Link>
			</Addition>
		</HeaderWrapper>
	);
	}
}

const mapStateToProps = (state) => {
	return{
		focused: state.getIn(['header', 'focused']),
		list:state.getIn(['header','list']),
		page:state.getIn(['header','page']),
		totalPage:state.getIn(['header', 'totalPage']),
		mouseIn:state.getIn(['header','mouseIn']),
		login:state.getIn(['login','login'])
	}
}
const mapDispathToProps = (dispatch) =>{
	return{
		handleInputFocus(list){
			(list.size === 0) && dispatch(actionCreators.getList());	
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage , spin) {
			console.log(spin);
			if (page < totalPage) {
			dispatch(actionCreators.changePage(page + 1));				
			}else {
			dispatch(actionCreators.changePage(1));		
			}
		},
		logout () {
			dispatch (loginActionCreators.logout(
				alert('退出成功！')
			))
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
