import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index:0;
	height:880px;
	position:absolute;
	left:0;
	right:0;
	bottom:0;
	top:56px;
	background:#eee;

`;

export const LoginBox = styled.div`
	width:400px;
	height:500px;
	margin:100px auto;
	padding-top:20px;
	background:#FFF;
	box-shadow:0 0 8px rgba(0,0,0,.1);
		h1{
			position:relative;
			font-size:30px;
			margin:35px 0 0 65px;
			color:#FF9900;
		}
	 	h6{
			position:relative;
			text-align:center;
			top:20px;
			width:400px;
			color:#b5b5b5;
	 	}

`;
export const LoginPic = styled.div`
	position:relative;
	width:250px;
	height:70px;
	margin:20px auto;
		.InconPic {
			position:relative;
			font-size:30px;
			margin-left:25px;
			top:27px;
			cursor:pointer;
		}

`;
export const LoginIpt = styled.div`
		position:relative;
		top:30px;
`;

export const Input = styled.input`
	position:relative;
	display:block;
	width:250px;
	height:50px;
	line-height:30px;
	padding:0 10px;
	margin:10px auto;
	color:#777;
	background:hsla(0,0%,71%,.1);
	border:1px solid black;
	border-radius:4px;
	font-size:16px;
`;

export const Button = styled.div`
	position:relative;
	width:220px;
	height:40px;
	top:10px;
	line-height:40px;
	color:#fff;
	background:#3194d0;
	border-radius:15px;
	margin:100px auto 50px ;
	text-align:center;
	font-size:18px;
	cursor:pointer;
`;

