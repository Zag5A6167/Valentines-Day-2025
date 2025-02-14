import React, {useState} from 'react'
import coupleBear from '../assets/coupleBear.gif';
import './CoupleBearImg.css'
  function CoupleBearImg({altText = "Couple Bears"}) {
    const [showResponse, setShowResponse] = useState(false);
    const [userResponse, setUserResponse] = useState(null);
  const handleYes = () =>{
    setShowResponse(true);
    setUserResponse(true);
  }
    return (
    <div className="container">
      <img src={coupleBear} alt={altText} />
      <div className="valentine-text">
        <h1>Are You My Valentine?</h1>
      </div>
    <div>
      <button className="yes-button" onClick={handleYes}>Yes</button>
      <button disabled>No</button>
    </div>

     
      {showResponse && (
        <div className="response-message">
          {userResponse ? "Wow! Happy Valentine's Day!" : "Very sad maybe next year!"}
        </div>
      )}
    </div>
  );
}

  export default CoupleBearImg