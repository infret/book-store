import styled from 'styled-components'

const Body = styled.li`
	width: 240px;
	border-radius: 10px;
	margin: 8px;
	box-shadow: var(--low-elevation);
	padding-top: 10px;
	&:hover {
		box-shadow: var(--high-elevation);

	}
	@media (max-width: 360px) {
		width: 90%;
		padding-top: 0;
	}
	@media (min-width: 360px) and (max-width: 640px) {
		width: 44%;
	}
	@media (min-width: 640px) and (max-width: 720px) {
		width: 30%;
	}
	@media (min-width: 720px) and (max-width: 4000px){
		width: 20%;
	}
`

const Preview = styled.img`
	width: auto;
	display: block;
	height: 240px;
	margin: 0 auto;
	@media (max-width: 360px){
		width: 100%;
		height: auto;
		border-radius: 10px 10px 0 0;
	}
`

const Title = styled.h3`
	font-size: 17px;
	margin: 10px;
	font-weight: 500;
	width: 90%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Author = styled.p`
	margin: 0 10px;
	color: grey;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`

const Price = styled.p`
	float: left;
	font-weight: 600;
	margin: 15px;
	position: relative;
	display: inline-block;
	width: 32px;
`

const Button = styled.button`
	background-color: cadetblue;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 15px;
	margin: 10px;
	float: right;
	cursor: pointer;
	display: inline-block;
	font-size: 15px;
`

export default function BookCard({image, title, author, price}){
	return (
			<Body>
				<Preview src={image} alt=''/>
				<Title>{title}</Title>
				<Author>{author}</Author>
				<Price>${price}</Price>
				<Button>To cart</Button>
			</Body>
	)
}