import styled from 'styled-components'

const Body = styled.li`
	width: 180px;
	border-radius: 10px;
	margin: 10px;
	box-shadow: var(--elevation);
`

const Preview = styled.img`
	width: 180px;
	height: 280px;
	border-radius: 10px 10px 0 0;
`

const Title = styled.h3`
	font-size: 17px;
	margin: 10px;
	font-weight: 500;
`

const Author = styled.p`
	margin: 0 10px;
	color: grey;
`

const Price = styled.p`
	float: left;
	font-weight: 600;
	margin: 15px;
`

const Button = styled.button`
	background-color: cadetblue;
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	margin: 10px;
	float: right;
`

export default function BookCard(props){
	return (
			<Body>
				<Preview src={props.img} alt=''/>
				<Title>{props.title}</Title>
				<Author>{props.author}</Author>
				<Price>{props.price} $</Price>
				<Button>Buy</Button>
			</Body>
	)
}