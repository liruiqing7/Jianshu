import React from 'react';
import Loadble from 'react-loadable';

const LoadbleComponent = Loadble({
	loader: ()=> import('./'),
	loading() {
		return <div>正在加载...</div>
	}
});

export default () => <LoadbleComponent/>

