import { useEffect } from 'react';
import file from './files/leizafroilan-github-io.pdf';

const Download = () => {
  useEffect(() => {
    const downloadFile = () => {
      // Create a temporary link element
      const a = document.createElement('a');
      a.href = file; 
      a.download = 'leizafroilan-github-io.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    // Delay the download slightly for smoother UX
    const timer = setTimeout(() => {
      downloadFile();
    }, 500);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <p>Your download should start shortly...</p>
      <p>If it doesn't, <a href={file} download="leizafroilan-github-io.pdf">click here</a>.</p>
    </div>
  );
};

export default Download;
