import React from 'react';
import './Social.css'
function Social() {
  return (
    <div className='social'>
      <div className="social-title">
        <h3>Followers</h3>
      </div>
      <div className="social-presence">
        <div className="social-media">
          <div className="social-icon">
            <i class="fas fa-share-square share"></i>
          </div>
          <div className="social-followers">
            <p>7,568</p>
            <span>Shares</span>
          </div>
        </div>
        <div className="social-media">
          <div className="social-icon">
            <i class="fab fa-facebook facebook"></i>
          </div>
          <div className="social-followers">
            <p>5,568</p>
            <span>Followers</span>
          </div>
        </div>
        <div className="social-media">
          <div className="social-icon">
            <i class="fab fa-whatsapp whatsapp"></i>
          </div>
          <div className="social-followers">
            <p>2,568</p>
            <span>Followers</span>
          </div>
        </div>
        <div className="social-media">
          <div className="social-icon">
            <i class="fab fa-twitter twitter"></i>
          </div>
          <div className="social-followers">
            <p>10,568</p>
            <span>Followers</span>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Social;
