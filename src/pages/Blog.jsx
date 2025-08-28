import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Blog = () => {
  return (
    <BlogContainer>
      <BlogTitle>Blog</BlogTitle>
      <p>Burada blog yazıları listelenecek.</p>
    </BlogContainer>
  );
};

export default Blog;
