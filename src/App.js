import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-content">
          <h3 className="nav-logo">GedjiDesk</h3>
          <div className="nav-links">
            <a href="#blog">Blog</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <h1>The Future of Help Desk is Here</h1>
          <p className="subtitle">Experience how AI is transforming corporate support</p>
        </section>

        <section className="featured-article">
          <div className="article-content">
            <span className="tag">Featured Article</span>
            <h2>AI Revolution in Corporate Help Desks</h2>
            <p className="article-excerpt">
              Discover how artificial intelligence is revolutionizing corporate help desks, 
              leading to faster resolution times, improved customer satisfaction, and 
              24/7 support capabilities.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">70%</span>
                <span className="stat-label">Faster Resolution</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat">
                <span className="stat-number">90%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
            <button className="cta-button">Read More</button>
          </div>
          <div className="article-image">
            <div className="image-placeholder"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
