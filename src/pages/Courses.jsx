import React from 'react';
import styled from 'styled-components';
import CourseCard from '../components/CourseCard';

const CoursesContainer = styled.div`
  padding: 2rem;
`;

const CoursesTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

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
    <CoursesContainer>
      <CoursesTitle>Eğitimler</CoursesTitle>
      <CoursesGrid>
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </CoursesGrid>
    </CoursesContainer>
  );
};

export default Courses;
