import React , { PureComponent } from 'react';
import {RecommendWrapper, RecommendItem}  from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
	render () {
		console.log('123',this.props);
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) =>{
						return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
					})
				}
			</RecommendWrapper>
		)
	}
}
	const mapState = (state) => ({	
		list: state.getIn(['home','recommendList'])
	})
export default connect(mapState, null) (Recommend);