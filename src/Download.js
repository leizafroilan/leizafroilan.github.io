import React, { useEffect } from 'react';
import file from './files/leizafroilan-github-io.pdf';

const Download = () => {
  useEffect(() => {
    const downloadFile = () => {
      const fileUrl = file;
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'leizafroilan-github-io.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    downloadFile();
  }, []);

  return <div>File will be downloaded shortly...</div>;
};

export default Download;