import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../components/CourseCard';

const coursesData = [
  {
    id: 1,
    title: 'React ile Web Programlama',
    description: 'Modern web uygulamaları geliştirmek için React\'ın gücünü keşfedin.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Python ile Veri Bilimi',
    description: 'Veri analizi, görselleştirme ve makine öğrenmesi için Python kullanın.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Mobil Uygulama Geliştirme',
    description: 'React Native kullanarak hem iOS hem de Android için mobil uygulamalar oluşturun.',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Courses = () => {
  return (
    <Container>
      <h1 className="my-4">Eğitimler</h1>
      <Row>
        {coursesData.map(course => (
          <Col key={course.id} sm={12} md={6} lg={4} className="mb-4">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Courses;
