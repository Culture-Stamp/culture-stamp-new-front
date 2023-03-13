import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ReviewContainer = () => {
	const { id } = useParams();

	const [title, setTitle] = useState();
	const [price, setPrice] = useState();
	const [content, setContent] = useState();
	const [location, setLocation] = useState();

	useEffect(() => {
		axios.get(`http://localhost:8080/review/${id}`).then((res) => {
			console.log('res : ', res.data);

			setTitle(res.data.title);
			setPrice(res.data.price);
			setContent(res.data.content);
			setLocation(res.data.location);
		})
	}, []);
	return (
		<>
			<h1>리뷰 상세보기</h1>
			<h2>{title}</h2>
			<h2>{price}</h2>
			<h2>{content}</h2>
			<h2>{location}</h2>
		</>
	)
}

export default ReviewContainer