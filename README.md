 
	key={index} 
	onClick={this.handleItemDelete.bind(this,index)}
	dangerouslySetInnerHTML={{__html: item}}{如果不希望被转译，需要用dangerouslySetInnerHTML={{__html: item}}，对内容进行设置。}

父组件通过属性的方式传递，子属性通过this.props.content(属性名)来接收数据。

（父子组件如何传值）父组件可以直接给子组件传值，若子组件想要调用父组件的值，需要用父组件向子组件传递一个方法，子组件来调用这个方法。

（单向数据流）父组件可以单向的给子组件传值，但子组件不能反向修改。

React的一些概念{
	1.声明式开发
	2.可以与其他框架并存
	3.组件化
	4.单向数据流
	5.视图层框架（在处理大型项目时不够用，只能用React搭建视图，可以搭配Redux，Flux进行额外的支撑。）
	6.函数式编程（便于维护，给前端自动化测试带来便捷性）
}

PropTypes类型校验，（isRequired要求必须校验且必须传递）。

defaultProps附默认值(如果父组件没有向子组件传递属性，那么defaultProps自己附一个属性的默认值)。

PropTypes.arrayOf()方法：element:PropTypes.arrayOf(PropTypes.number, PropTypes.string).elemenet可以是一个number也可以是一个string，他是一个或者的语法。

props.state与render函数的关系：
	1.当组件的state或者props发生改变的时候，render函数就会重新执行。
	2.当父组件的render函数被运行时，它的子组件的render都将被重新运行一次。(子组件发生两次改变是因为是父组件的子组件，且自己的props发生改变)

什么是虚拟DOM：
	一、
		1. state 数据
		2. JSX 模板
		3. 数据 + 模板 结合,生成真实的DOM,来显示
		4. state 发生改变
		5. 数据 + 模板 结合,生成真实的DOM,替换原始的DOM

	缺陷：
	第一次生成了一个完整的DOM片段
	第二次生成了一个完整的DOM片段
	第二次的DOM替换了第一次的DOM，非常损耗新性能


	二、
		1.state 数据
		2.JSX 模板
		3.数据 + 模板 结合，生成真实的DOM，来显示
		4.state发生改变
		5.数据 + 模板 结合，生成真实的DOM，并不直接替换原始的DOM
		6.新的DOM {DocumentFragment(文档碎片)} 和原始的DOM 作比对，找差异
		7.找出input框发生了变化
		8.只用新的DOM中的input元素,替换掉老的DOM中的input元素

	缺陷：性能提升并不明显

	三、
		1.state 数据
		2.JSX 模板
		3.数据 + 模板 结合,生成真实DOM，来显示
		<div id="abc"><span>hellow world</span></div>
		4.生成虚拟DOM(虚拟DOM就是一个JS对象,用它来描述真实的DOM) (损耗性能)
		['div',{id:'abc'},['span',{ },'hellw world']]
		5.state发生改变
		6.数据 + 模板 生成新的虚拟DOM (极大地提升了性能)
		['div',{id:'abc'},['span',{},'bye bye']]
		7.比较原始虚拟DOM和新的虚拟DOM的区别,找到区别是span中的内容 (极大地提升性能)
			
			Diff算法 , diffrence  ，React中做列表循环时必须引入Key值，为了提高虚拟DOM对比性能，不用index做Key值是为了稳定。DIff是同级比对。

		8.直接操作DOM,改变span中的内容

	注意：
		虚拟DOM本质上就是一个JS对象，之所以能够提高性能本质上是因为JS里面去对比JS对象，不怎么损耗性能。但对比真实的DOM会很消耗性能。
		在真实的React中应是先生成一个虚拟DOM，然后再生成原始DOM，发现虚拟DOM中有变化时，直接改变原始DOM的内容。

		//JSX -> createElement ->虚拟DOM (JS 对象) -> 真实DOM
		//return <div><span>item</span></div>
		//return React.createElement('div', {}, React.createElement('span', {}, 'item'))

React的生命周期函数
	生命周期函数指在某一时刻组件会自动调用执行的函数
	生命周期函数针对于组件，每一个组件都会有。

	Initialization 
		setup props and state //设置 props和state

	Mounting     //页面挂载
		componentWillMount(){}   //在组件即将被挂载到页面时被执行
		render(){}    //页面的挂载
		componentDidMount(){}   //在组件被挂载到页面之后被执行
	Updation
		states
			shouldComponentUpdate(){} //组件被更新之前执行，确认组件是否更新 需要返回 ture 和 false.
			componentWillUpdate(){}   //组件被更新前执行，但在shouldComponentUpdate之后，如果返回ture则执行，如果返回false则不执行
			render(){}    //页面重新渲染虚拟DOM
			componentDidUpdate(){}   //组件更新之后执行

		props
			componentWillReceiveProps(){}   //(child) 没有子组件情况下不会被执行,当一个组件要从父组件接收函数		//child意为子组件的生命周期函数
			 								//如果这个组件第一次存在父组件中，不会执行
			 								//如果这个组件之前已经存在于父组件中，才会被执行
			componentUpdate(){}              //组件被更新之前执行，确认组件是否更新 需要返回 ture 和 false.
			componentWillUpdate(){}         //组件被更新前执行，但在shouldComponentUpdate之后，如果返回ture则执行，如果返回false则不执行
			render(){}                      //页面重新渲染虚拟DOM
			componentDidUpdate(){}          //组件更新之后执行

	Unmounting
		componentWillUnmounting(){}   		//(child)当组件即将从页面中剔除的时候，会被执行


React中性能优化的点
	1. this.handleClick = this.handleClick.bind(this);这样的方法改变作用域的话可以放到constructor里
	                   								  这样可以保证这个函数的作用域只绑定一次，可以避免子组件的无谓渲染。
	2. setState内置了性能提升的机制，是一个异步的函数，可以把多次数据的改变改为一次，降低虚拟DOM的比对频率。
	3. React的底层用了虚拟DOM的概念，同层比对和key值，提升了虚拟DOM的比对速度。
	4. 借助shouldComponentUpdate方法提高React组件的性能，因为可以避免无谓的组件的render函数的运行。


发送ajax请求流程：
	首先绑定一个click事件，然后派发action，借助redux-thunck中间件在action里去异步操作,请求到数据之后，再派发同步action，然后ruducer接收到同步的action之后去改变数据，数据改变，页面一起改变。
	
