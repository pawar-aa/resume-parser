# Resume Reader

A web application that allows users to upload resumes and retrieve structured information from them using the Mindee API.

## Description

The Resume Reader is a React-based web application that enables users to upload their resumes in various formats, such as PDF or Word documents. The application then processes these resumes using the Mindee API to extract structured information, including candidate contact details, work experience, skills, and more.

## Installation

To run the Resume Reader locally, follow these steps:

Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/resume-reader.git
   ```

Navigate to the project directory:
   ```bash
   cd resume-reader
   ```
Install dependencies:

```bash
npm install
```

This will install the following libraries and APIs:

React: A JavaScript library for building user interfaces.
axios: A promise-based HTTP client for making API requests.
react-dropzone: A React component for handling file uploads via drag and drop.
mindee: A JavaScript client for interacting with the Mindee API.


## Usage
Drag and drop your resume file into the designated area or click the "Choose File" button to select a file from your computer.

Click the "Submit" button to upload your resume to the server.

After the upload is complete, click the "Get Job Status" button to retrieve the extracted information from your resume.

The extracted information will be displayed in the right half of the screen, organized into relevant sections such as contact details, work experience, skills, and summary.

## API Documentation
The Resume Reader uses the Mindee API to extract information from resumes. For API documentation and usage instructions, refer to the Mindee API Documentation.

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
