import Button from 'react-bootstrap/Button';
import React, { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Review = () => {

	useEffect(() => {
	}, []);

	const formSubmit = () => {
		console.log('sdfsdf');
	}
	return (
		<div className='text-center' style={{ maxWidth: '640px', margin: '0px auto' }}>
			<h1>Review</h1>
			<div className='mt-5'>
				<Form>
					<Form.Group as={Row} className="mb-3" controlId="title">
						<Form.Label column lg="2">
							<h3>Title</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="text" placeholder="제목을 입력하세요" required />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="location">
						<Form.Label column lg="2">
							<h3>Location</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="text" placeholder="장소를 입력하세요" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="companion">
						<Form.Label column lg="2">
							<h3>Companion</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="text" placeholder="함께한 사람을 입력하세요" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="rating">
						<Form.Label column lg="2">
							<h3>Rating</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="number" min={0} max={5} placeholder="평가를 입력하세요" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="price">
						<Form.Label column lg="2">
							<h3>Price</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="number" placeholder="가격을 입력하세요" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="date">
						<Form.Label column lg="2">
							<h3>Date</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control size="lg" type="date" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="category">
						<Form.Label column lg="2">
							<h3>Category</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Select size="lg">
								<option>카테고리1</option>
								<option>카테고리2</option>
								<option>카테고리3</option>
								<option>카테고리 불러오는 api</option>
							</Form.Select>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="title">
						<Form.Label column lg="2">
							<h3>Image</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control type="file" size='lg' />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="title">
						<Form.Label column lg="2">
							<h3>Memo</h3>
						</Form.Label>
						<Col lg="10">
							<Form.Control as="textarea" rows={3} placeholder="내용을 입력하세요" />
						</Col>
					</Form.Group>
					<Button variant="primary" type='submit' onClick={formSubmit}><h3>Stamp!</h3></Button>{' '}
				</Form>
			</div>
		</div>
	)
}

export default Review