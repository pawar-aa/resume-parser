// JobStatus.js
import React, { useState } from 'react';
import axios from 'axios';
import './JobStatus.css'; // Import CSS file for styling

const JobStatus = ({ jobId }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // Add state for showing loading indicator
  const apiKey = "API_KEY";

  const getJobStatus = async () => {
    try {
      setLoading(true); // Show loading indicator
      const response = await axios.get(
        `https://api.mindee.net/v1/products/aashaypawar9/resume/v1/documents/queue/${jobId}`,
        {
          headers: {
            Authorization: `Token ${apiKey}`,
          },
        }
      );
      setLoading(false); // Hide loading indicator after response
      console.log('Response from API:', response.data); // Log the entire response
      setResponse(response.data); // Save the response to state for debugging
    } catch (error) {
      console.error('Error fetching job status:', error);
      setLoading(false); // Hide loading indicator in case of error
    }
  };

  return (
    <div className="status-container">
      <div className="status-section">
        <h2>Job Status</h2>
        <button onClick={getJobStatus} disabled={loading}>Get Job Status</button>
        {loading && <p>Loading...</p>} {/* Show loading indicator */}
        {response && (
          <div className="response">
            <h3>API Response</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobStatus;
