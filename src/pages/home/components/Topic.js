import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { Link } from 'react-router-dom';

class Topic extends PureComponent {
	render () {
		const { list } = this.props;
		return (		
			<TopicWrapper>
				{
					list.map((item)=> (	
					<Link to='/detail1'>				
						<TopicItem key={item.get('id')}>
						
							<img  
								className='topic-pic' 
								src={item.get('imgUrl')}
								alt=''
							/>
							
							{item.get('title')}
						</TopicItem>
					</Link>
					))
				}				
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','topicList'])
});

export default  connect(mapState , null) (Topic);