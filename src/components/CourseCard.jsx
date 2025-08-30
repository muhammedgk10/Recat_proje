import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={course.image} alt={course.title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Button as={Link} to={`/courses/${course.id}`} variant="primary" className="mt-auto">Detayları Gör</Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
