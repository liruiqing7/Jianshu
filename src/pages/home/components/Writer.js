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
						<img src='//upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
						
					</WriterList>
					<WriterList>
						<img src='//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
					</WriterList>
					<WriterList>
						<img src='//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
					</WriterList>
					<WriterList>
						<img src='//upload.jianshu.io/users/upload_avatars/10849033/7278547c-f8ba-4a5a-a2ad-5dfd43abab81.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'/>
					</WriterList>
				</WriterItem>
			</WriterWrapper>
		)
	}
}

export default Writer;