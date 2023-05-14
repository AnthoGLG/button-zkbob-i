import React, { useState } from 'react';
import './App.css'; // fichier de style

function App() {
  const [showPopup, setShowPopup] = useState(false);

  function handleUpload() {
    setShowPopup(true);
  }

  function handleFileUpload(event) {
    const file = event.target.files[0];
    console.log(file);
    setShowPopup(false);
  }

  return (
    <div className="center">
      <button className="upload-btn" onClick={handleUpload}>Upload Img</button>
      {showPopup && (
        <div className="popup center">
          <div className="popup-content">
            <input type="file" accept="image/jpeg" onChange={handleFileUpload} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
