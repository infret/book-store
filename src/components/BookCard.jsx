import styled from 'styled-components'

const Card = styled.li`
	width: 180px;
	margin-top: 10px;
	box-shadow: var(--low-elevation);
	border-radius: 4px;
	&:hover {
		box-shadow: var(--high-elevation);
	}
`

const Preview = styled.img`
	width: 100%;
	display: block;
	height: 240px;
	margin: 0 auto;
	border-radius: 4px 4px 0 0;
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

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Price = styled.p`
	font-weight: 600;
	margin: 10px;
	width: 32px;
`

const Button = styled.button`
	background-color: var(--accent-color);
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 15px;
	margin: 10px;
	cursor: pointer;
	font-size: 15px;
	height: 36px;
`

export default function BookCard({image, title, author, price}){
	return (
			<Card>
				<Preview src={image} alt=''/>
				<Title>{title}</Title>
				<Author>{author}</Author>
				<Container>
				<Price>${price}</Price>
				<Button>To cart</Button>
				</Container>
			</Card>
	)
}