import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { Link } from 'react-router-dom';

class Topic extends PureComponent {
	render () {
		const { list } = this.props;
		return (
			<Link to='/detail1'>
			<TopicWrapper>
				{
					list.map((item)=> (						
						<TopicItem key={item.get('id')}>
							<img  
								className='topic-pic' 
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}				
			</TopicWrapper>
			</Link>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','topicList'])
});

export default  connect(mapState , null) (Topic);