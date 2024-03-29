// UploadResume.js
import React, { useState } from 'react';
import axios from 'axios';
import './UploadResume.css'; // Import CSS file for styling

const UploadResume = ({ setJobId }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false); // Add state for showing loading indicator
  const apiKey = "API_KEY";

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('document', file);

      try {
        setUploading(true); // Show loading indicator
        const response = await axios.post(
          'https://api.mindee.net/v1/products/aashaypawar9/resume/v1/predict_async',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Token ${apiKey}`,
            },
          }
        );
        setUploading(false); // Hide loading indicator after response
        if (response.data && response.data.api_request && response.data.api_request.status === 'success') {
          const jobId = response.data.job.id;
          setJobId(jobId); // Update jobId state
          console.log('Job ID:', jobId);
        } else {
          console.error('Error uploading file:', response.data.api_request.error);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
        setUploading(false); // Hide loading indicator in case of error
      }
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="upload-container">
      <div className="upload-section">
        <h2>Upload Resume</h2>
        <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
          <input type="file" id="fileInput" onChange={handleFileChange} />
          <span>Drag & Drop your resume here or click to browse</span>
        </div>
        <button onClick={handleFileUpload} disabled={uploading}>Submit</button>
        {uploading && <p>Uploading...</p>} {/* Show loading indicator */}
      </div>
    </div>
  );
};

export default UploadResume;
