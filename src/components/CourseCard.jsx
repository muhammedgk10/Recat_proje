import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #6c757d;
  margin-bottom: 1rem;
`;

const CardButton = styled(Link)`
  background-color: #007aff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CourseCard = ({ course }) => {
  return (
    <Card>
      <CardImage src={course.image} alt={course.title} />
      <CardContent>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
        <CardButton to={`/courses/${course.id}`}>Detayları Gör</CardButton>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
