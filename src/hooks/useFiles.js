import { useState, useEffect } from 'react';
import axios from 'axios';

const useFiles = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drive/files');
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files', error);
      }
    };

    fetchFiles();
  }, []);

  return files;
};

export default useFiles;
