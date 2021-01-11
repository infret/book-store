import styled from 'styled-components'
import React from 'react'

const Body = styled.footer`
	box-shadow: var(--low-elevation);
	height: 60px;
	display: flex;
	background-color: white;
	border-radius: 4px 4px 0 0;
	align-items: center;
	width: 100%;
	max-width: 1000px;
	margin: 20px auto 0 auto;
	position: relative;
	bottom: 0;
`

const Link = styled.a`
	display: block;
	text-transform: lowercase;
	font-family: serif;
	color: grey;
	margin: 0 auto;
`

export const Footer = () => (
		<Body>
			<Link href='https://infret.github.io'><i>by Infret</i></Link>
		</Body>
)