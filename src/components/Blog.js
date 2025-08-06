import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { getAllPosts } from "../blog/posts";
import "../styles/Blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Get all posts from the posts configuration
    const blogPosts = getAllPosts();
    setPosts(blogPosts);
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div id="blog" className="blog-section research-paper-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={10} sm={12}>
              <button 
                onClick={handleBackClick}
                className="btn btn-outline-primary mb-4"
              >
                ← Back to Blog
              </button>
              <div className="research-paper">
                <h1 className="blog-post-title">{selectedPost.title}</h1>
                <p className="blog-post-date">{selectedPost.date}</p>
                <div className="blog-post-content research-paper-content">
                  {selectedPost.content.split('\n').map((line, idx) => (
                    <p key={idx} style={{marginBottom: '1.2em'}}>{line}</p>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <div id="blog" className="blog-section">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">Thoughts, ideas, and experiences</p>
          </Col>
        </Row>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} lg={6} md={12} className="mb-4">
              <Card className="blog-card">
                <Card.Body>
                  <Card.Title className="blog-title">{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted blog-date">
                    {post.date}
                  </Card.Subtitle>
                  <Card.Text className="blog-excerpt">
                    {post.excerpt}
                  </Card.Text>
                  <button 
                    onClick={() => handlePostClick(post)}
                    className="btn btn-primary"
                  >
                    Read More
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog; 