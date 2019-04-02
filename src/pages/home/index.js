import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators } from './store';
import {BackTop} from './style';
import { Icon } from 'antd';

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends PureComponent {

	

	handleScrollTop() { 
		window.scrollTo(0, 0);
	}

	render () {
		return (
			<HomeWrapper>
			<HomeLeft>
				<img  className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
				<Topic />
				<List />
			</HomeLeft>
			<HomeRight>
				<Recommend />
				<Writer />
			</HomeRight>
			{ this.props.showScroll ? <BackTop onClick={this.handleScrollTop} ><Icon type="to-top" /></BackTop> : null}	
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow)
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow)
	}

}
	
const mapState = (state) =>({
	showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() { 
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 300) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default  connect(mapState, mapDispatch) (Home);