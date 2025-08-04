"use client"

export default function StyledComponent() {
  return (
    <div className="container">
      <h1 className="title">Styled with styled-jsx</h1>
      <p className="description">This is scoped to this component only</p>

      <style jsx>{`
        .container {
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 8px;
          color: white;
        }
        
        .title {
          font-size: 2rem;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .description {
          font-size: 1.1rem;
          text-align: center;
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}
