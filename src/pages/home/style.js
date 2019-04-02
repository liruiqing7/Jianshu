import styled from 'styled-components';

 export const HomeWrapper = styled.div`
 	overflow:hidden;
 	position:relative;
	width:1260px;
	margin:0 auto;;
	top:56px;
`;

 export const HomeLeft = styled.div`
 	margin-left:15px;
 	padding-top:30px;
	width:825px;
	float:left;
	.banner-img{	
		width:825px;
		height:280px;
	}
`;

 export const HomeRight = styled.div`
	width:350px;
	float:right;
`;

export const TopicWrapper = styled.div`
	overflow:hidden;
	padding:20px 0 10px 0;
	margin-left:-10px;
	border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float:left;
	height:32px;
	line-height:32px;
	margin-left:18px;
	margin-bottom:18px;
	padding-right:10px;
	background:#f7f7f7;
	font-size:14px;
	color:black;
	border:1px solid #dcdcdc;
	border-radius:5px;
	cursor:pointer;
		.topic-pic{
			display:block;
			float:left;
			width:32px;
			height:32px;
			margin-right:10px
		}
`;
export const ListItem = styled.div `
	overflow:hidden;
	padding:20px 0;
	border-bottom:1px solid #dcdcdc;
	.List-pic {
		display:block;
		width:225px;
		height:100px;
		float:right;
		border-radius:10px;
		border:1px solid #999;
	}
`;
export const ListInfo = styled.div`
	width:500px;
	float:left;
	.title{
		font-size:18px;
		line-height:27px;
		font-weight:bold;
		color:#333;
	}
	.desc {
		line-height:24px;
		font-size:13;
		color:#999;
	}
`;

export const RecommendWrapper = styled.div`
	margin:30px 0;
	width:350px;
`;

export const RecommendItem = styled.div`
	width:350px;
	height:60px;
	background:url(${(props) => props.imgUrl});
	background-size:contain;
`;

export const WriterWrapper = styled.div`
	position:relative;
	width:348px;
	border:1px solid #dcdcdc;
	border-radius:5px;
	height:400px;
		span{
			display:block;
			position:absolute;
			font-size:14px;
			color:#969696;
		}
`;
export const WriterSwitch = styled.a`
	cursor:pointer;
	float:right;
	font-size:14px;
	color:#969696;
		.WriterIcon{
			font-size:12px;
			color:#969696;
			padding-right:5px;
		}
`;
export const WriterItem = styled.div`
	width:348px;
	height:380px;
	margin-top:20px;
`;

export const WriterList = styled.div`
	width:348px;
	height:80px;
	margin-top:20px;
		img {
			width:48px;
   			height:48px;
   			box-sizing: border-box;
    		border: 1px solid #ddd;
    		border-radius: 50%;
		}
`;

export const LoadMore = styled.div`
	width:100%;
	height:40px;
	line-height:40px;
	margin:30px 0;
	background:#a5a5a5;
	border-radius:15px;
	color:#fff;
	cursor:pointer;
	text-align:center;
`;

export const BackTop  =styled.div`
	position:fixed;
	right:100px;
	bottom:30px;
	width:40px;
	line-height:40px;
	background:#0099cc;
	border:1px solid #ccc;
	border-radius:15px;
	text-align:center;
	cursor:pointer;
`;