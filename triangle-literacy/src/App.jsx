import React, { useState, useEffect } from 'react';
import './App.css';

const ResourceCard = ({ title, subtitle, description, linkUrl }) => (
  <div className="resource-card">
    <h3>{title}</h3>
    {subtitle && <strong>📍 {subtitle}</strong>}
    <p>{description}</p>
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">Learn More &rarr;</a>
  </div>
);

function App() {
  const [dbData, setDbData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Could not connect to the database.");
        }
        return response.json();
      })
      .then(data => {
        setDbData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Loading literacy resources from the database... 📚</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container" style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="site-header">
        <h1>Triangle Literacy Hub</h1>
        <p>Connecting Raleigh, Durham, and Chapel Hill to the power of reading.</p>
      </header>

      <main>
        <section className="section-container">
          <h2 className="section-title">The Literacy Landscape</h2>
          <p>
            Literacy is the foundation of community health, economic mobility, and personal empowerment. 
          </p>
          <div className="data-stats">
            <div className="stat-box">
              <span className="stat-number">21%</span>
              <span>of US adults have very low literacy skills.</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">54%</span>
              <span>of US adults read below a sixth-grade level.</span>
            </div>
          </div>
        </section>

        <section className="section-container">
          <h2 className="section-title">Local Public Libraries</h2>
          <div className="card-grid">
            {dbData.localLibraries.map((lib, index) => (
              <ResourceCard 
                key={index}
                title={lib.name}
                subtitle={lib.area}
                description={lib.desc}
                linkUrl={lib.link}
              />
            ))}
          </div>
        </section>

        <section className="section-container">
          <h2 className="section-title">Triangle Literacy Programs</h2>
          <div className="card-grid">
            {dbData.localPrograms.map((prog, index) => (
              <ResourceCard 
                key={index}
                title={prog.name}
                subtitle={prog.area}
                description={prog.desc}
                linkUrl={prog.link}
              />
            ))}
          </div>
        </section>

        <section className="section-container">
          <h2 className="section-title">Free Online Tools</h2>
          <div className="card-grid">
            {dbData.onlineResources.map((resource, index) => (
              <ResourceCard 
                key={index}
                title={resource.name}
                description={resource.desc}
                linkUrl={resource.link}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;