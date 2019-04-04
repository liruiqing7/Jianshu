import React , { PureComponent } from 'react';
import { WriterWrapper ,WriterSwitch ,WriterItem ,WriterList} from '../style';
import { Icon } from 'antd';

class Writer extends PureComponent {
	render () {
		return (

			<WriterWrapper>
				<span>推荐作者</span>
				<WriterSwitch>
				<Icon type="sync" className='WriterIcon'/>
					换一换
				</WriterSwitch>
				<WriterItem>
					<WriterList>
						<img src='http://www.liruiqing.top/img/WI1.jpg'/>					
					</WriterList>
					<WriterList>
						<img src='http://www.liruiqing.top/img/WI2.jpg'/>
					</WriterList>
					<WriterList>
						<img src='http://www.liruiqing.top/img/WI3.jpg'/>
					</WriterList>
					<WriterList>
						<img src='http://www.liruiqing.top/img/WI5.jpg'/>
					</WriterList>
				</WriterItem>
			</WriterWrapper>
		)
	}
}

export default Writer;