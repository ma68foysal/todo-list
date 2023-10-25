import React from 'react';
import { toast } from 'react-toastify';
import { FaCopy } from 'react-icons/fa';


function CopyButton({ textToCopy }) {
  const copyToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Show a toast message on successful copy
    toast.success('Copied to clipboard!', {
      position: 'bottom-right',
      autoClose: 1500, // Optional: You can customize the toast message duration
    });
  };

  return (
    <FaCopy onClick={copyToClipboard} className='copy-btn'/>
  );
}

export default CopyButton;
