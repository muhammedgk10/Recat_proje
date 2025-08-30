import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const coursesData = [
  {
    id: 1,
    title: 'React ile Web Programlama',
    description: 'Modern web uygulamaları geliştirmek için React\'ın gücünü keşfedin. Bu kursta, bileşen tabanlı mimari, state yönetimi, ve React Router gibi konuları öğreneceksiniz. Ayrıca, modern JavaScript (ES6+) özelliklerini ve JSX sözdizimini kullanarak etkileşimli kullanıcı arayüzleri oluşturacaksınız.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Python ile Veri Bilimi',
    description: 'Veri bilimi dünyasına Python ile adım atın. Bu kursta, NumPy, Pandas, Matplotlib ve Scikit-learn gibi popüler kütüphaneleri kullanarak veri analizi, veri görselleştirme ve makine öğrenmesi temellerini öğreneceksiniz. Gerçek dünya veri setleri üzerinde çalışarak pratik deneyim kazanacaksınız.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    title: 'Mobil Uygulama Geliştirme',
    description: 'React Native ile hem iOS hem de Android platformları için cross-platform mobil uygulamalar geliştirin. Bu kursta, temel React Native bileşenlerini, navigasyonu ve state yönetimini öğreneceksiniz. Ayrıca, cihaz özelliklerine (kamera, konum vb.) nasıl erişileceğini ve uygulamanızı nasıl yayınlayacağınızı öğreneceksiniz.',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <Container className="text-center my-5">
        <h2>Kurs bulunamadı!</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row>
        <Col md={12}>
          <Image src={course.image} alt={course.title} fluid rounded className="mb-4" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1>{course.title}</h1>
          <p className="lead">{course.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetail;
