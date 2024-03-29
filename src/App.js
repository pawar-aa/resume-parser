// App.js
import React, { useState } from 'react';
import UploadResume from './UploadResume';
import JobStatus from './JobStatus';

function App() {
  const [jobId, setJobId] = useState(null);

  return (
    <div className="App">
      <h1>Resume Parser</h1>
      <UploadResume setJobId={setJobId} />
      {/* Pass jobId as prop to JobStatus component */}
      {jobId && <JobStatus jobId={jobId} />}
    </div>
  );
}

export default App;
