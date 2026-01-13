import React, { useState } from 'react';

// 1. Mock Data for Tools
const toolsData = [
  {
    id: 1,
    name: 'ChatGPT',
    category: 'Chat',
    description: 'The industry standard for conversational AI. Great for coding, writing, and brainstorming.',
    link: '#'
  },
  {
    id: 2,
    name: 'Midjourney',
    category: 'Image',
    description: 'Generates hyper-realistic images from text prompts. Best in class for artistic visuals.',
    link: '#'
  },
  {
    id: 3,
    name: 'GitHub Copilot',
    category: 'Code',
    description: 'Your AI pair programmer. Suggests code and entire functions in real-time.',
    link: '#'
  },
  {
    id: 4,
    name: 'Jasper',
    category: 'Writing',
    description: 'AI copywriting tool designed for marketing, blog posts, and ad copy.',
    link: '#'
  },
  {
    id: 5,
    name: 'Synthesia',
    category: 'Video',
    description: 'Create professional AI videos from text in minutes with human avatars.',
    link: '#'
  },
  {
    id: 6,
    name: 'RunwayML',
    category: 'Video',
    description: 'Advanced video editing and generation tools used by professional filmmakers.',
    link: '#'
  }
];

const AiTools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories for the filter buttons
  const categories = ['All', 'Chat', 'Image', 'Code', 'Video', 'Writing'];

  // 2. Filter Logic
  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="tools-container">
      
      {/* Header */}
      <div className="tools-header">
        <h1 className="tools-title">AI Tools Directory</h1>
        <p className="tools-desc">
          Hand-picked tools to supercharge your workflow. 
          Updated weekly.
        </p>
      </div>

      {/* Filter Section */}
      <div className="filter-container">
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search for tools (e.g. ChatGPT)..." 
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Buttons */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="tools-grid">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <div className="card-header">
                <h3 className="tool-name">{tool.name}</h3>
                <span className="category-tag">{tool.category}</span>
              </div>
              <p className="tool-description">{tool.description}</p>
              <a href={tool.link} className="visit-btn">Visit Website &rarr;</a>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No tools found matching your criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default AiTools;