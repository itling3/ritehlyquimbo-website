
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="This Page Does Not Exist" 
        description="Oops, looks like the page is lost." 
      />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <link href="https://fonts.googleapis.com/css?family=DM+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
      
      <style>{`
        .page-not-found-body {
          color: #1d1e20;
          background: #f4f5ff;
          font-size: 14px;
          font-family: "DM Sans", "Roboto", sans-serif !important;
          font-weight: 400;
          -ms-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
        }

        .page-not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
        }

        .page-not-found .image {
            max-width: 100%;
            margin-bottom: 32px;
            height: auto;
            object-fit: contain;
        }

        .page-not-found .title {
            text-align: center;
            margin-top: 0;
            margin-bottom: 8px;
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            color: #1d1e20;
        }

        .page-not-found .text {
            text-align: center;
            max-width: 650px;
            margin-bottom: 24px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 400;
            color: #6D7081;
        }

        .back-btn {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .back-btn:hover {
          background: #2563eb;
        }
      `}</style>

      <div className="page-not-found-body">
        <div className="page-not-found">
            <img 
              className="image" 
              alt="Page Not Found" 
              src="https://lh3.googleusercontent.com/d/1MToveZaYCNtEpfPNhFDhv8ylDPhqngKR" 
              width="400"
            />
            <h1 className="title">This Page Does Not Exist</h1>
            <p className="text">
                Sorry, the page you are looking for could not be found. It's just an
                accident that was not intentional.
            </p>

        </div>
      </div>
    </>
  );
};

export default NotFound;
