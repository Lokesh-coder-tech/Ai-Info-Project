import React, { useState } from 'react';

const Docs = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Define your content data here
  const docContent = {
    introduction: {
      title: "Introduction",
      content: (
        <>
          <p>Welcome to the Aivon Documentation. This guide is designed to help you navigate the complex landscape of Artificial Intelligence tools and integrate them into your workflow.</p>
          <p>Whether you are a developer looking to integrate an API, or a creator looking to optimize your prompts, Aivon provides the structural knowledge you need.</p>
          <h3>What you will learn</h3>
          <ul>
            <li>Understanding Large Language Model (LLM) basics</li>
            <li>Effective Prompt Engineering techniques</li>
            <li>API Authentication and Safety</li>
          </ul>
        </>
      )
    },
    prompt_engineering: {
      title: "Prompt Engineering",
      content: (
        <>
          <p>Prompt engineering is the art of communicating with AI to get the exact output you want. It is not just about asking questions; it is about providing context, constraints, and format.</p>
          <h3>The CO-STAR Framework</h3>
          <p>To get the best results, structure your prompts using Context, Objective, Style, Tone, Audience, and Response format.</p>
          <div className="code-block">
            <span className="code-label">EXAMPLE PROMPT</span>
            <pre>
{`ACT AS: Senior Python Developer
CONTEXT: I am building a flask app.
TASK: Write a function to validate emails.
CONSTRAINT: Do not use regex.
OUTPUT: JSON format.`}
            </pre>
          </div>
        </>
      )
    },
    api_integration: {
      title: "API Integration",
      content: (
        <>
          <p>Integrating AI into your application usually involves handling API keys and asynchronous requests. Below is a standard example of calling an AI endpoint.</p>
          <h3>Basic Fetch Request</h3>
          <div className="code-block">
            <span className="code-label">JAVASCRIPT</span>
            <pre>
{`const getAIResponse = async (prompt) => {
  const response = await fetch('https://api.aivon.com/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ prompt: prompt })
  });
  
  const data = await response.json();
  return data;
}`}
            </pre>
          </div>
        </>
      )
    },
    safety: {
      title: "Safety & Ethics",
      content: (
        <>
          <p>When building with AI, safety is paramount. Ensure you are filtering user inputs to prevent "Prompt Injection" attacks.</p>
          <p>Always review AI-generated code before deploying it to production environments.</p>
        </>
      )
    }
  };

  return (
    <div className="docs-container">
      
      {/* Sidebar */}
      <aside className="docs-sidebar">
        <div className="sidebar-header">CONTENTS</div>
        <ul className="sidebar-menu">
          <li 
            className={`sidebar-item ${activeSection === 'introduction' ? 'active' : ''}`}
            onClick={() => setActiveSection('introduction')}
          >
            1. Introduction
          </li>
          <li 
            className={`sidebar-item ${activeSection === 'prompt_engineering' ? 'active' : ''}`}
            onClick={() => setActiveSection('prompt_engineering')}
          >
            2. Prompt Engineering
          </li>
          <li 
            className={`sidebar-item ${activeSection === 'api_integration' ? 'active' : ''}`}
            onClick={() => setActiveSection('api_integration')}
          >
            3. API Integration
          </li>
          <li 
            className={`sidebar-item ${activeSection === 'safety' ? 'active' : ''}`}
            onClick={() => setActiveSection('safety')}
          >
            4. Safety & Ethics
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="docs-content">
        <h1 className="doc-title">{docContent[activeSection].title}</h1>
        <div className="doc-body">
          {docContent[activeSection].content}
        </div>
      </main>

    </div>
  );
};

export default Docs;