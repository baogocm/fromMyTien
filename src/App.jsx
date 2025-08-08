import { useState, useEffect } from 'react'
import './App.css'
// Import ảnh từ assets
import photo1 from './assets/img1.jpg'
import photo2 from './assets/img2.jpg'
import photo3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'

import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'


function App() {
  const [showLetter, setShowLetter] = useState(false)
  const [showImages, setShowImages] = useState(false)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showPhotoGallery, setShowPhotoGallery] = useState(false)

  useEffect(() => {
    // Hiển thị lá thư sau 1 giây
    const timer1 = setTimeout(() => setShowLetter(true), 1000)
    // Mở phong bì sau 5 giây
    const timer2 = setTimeout(() => setIsEnvelopeOpen(true), 5000)
    // Hiển thị gallery ảnh sau 3.5 giây
    const timer3 = setTimeout(() => setShowPhotoGallery(true), 3500)
    // Hiển thị hình ảnh chúc mừng sau 5 giây
    const timer4 = setTimeout(() => setShowImages(true), 5000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <div className="graduation-container">
      {/* Header */}
      <header className="header">
        <h1 className="main-title">🎓 Chúc Mừng</h1>
        <h1 className="main-title"> Tốt Nghiệp 🎓</h1>
        <div className="graduation-cap">🎓</div>
      </header>

      {/* Phong bì thư */}
      {showLetter && (
        <div className="envelope-container">
          <div className={`envelope ${isEnvelopeOpen ? 'open' : ''}`}>
            {/* Mặt trước phong bì */}
            <div className="envelope-front">
              <div className="envelope-flap-top"></div>
              <div className="envelope-body">
                <div className="stamp-area">
                  <div className="envelope-image">
                    <img src={img4} alt="Hình ảnh đặc biệt" />
                  </div>
                </div>
                <div className="address-area">
                  <div className="to-label">Gửi đến:</div>
                  <div className="recipient">Hà</div>
                  <div className="date">Ngày {new Date().toLocaleDateString('vi-VN')}</div>
                </div>
              </div>
              <div className="envelope-flap-left"></div>
              <div className="envelope-flap-right"></div>
              <div className="envelope-flap-bottom"></div>
            </div>

            {/* Lá thư bên trong */}
            <div className={`letter-inside ${isEnvelopeOpen ? 'visible' : ''}`}>
              <div className="letter-paper">
                <div className="letter-header">
                  <div className="letter-date">Ngày {new Date().toLocaleDateString('vi-VN')}</div>
                </div>
                <div className="letter-content">
                  <h2>Chúc mừng Hà - cô bạn đồng nghiệp ngọt ngào của tuii!!</h2>
                  
                  <p>
                    Hôm nay không chỉ là ngày Hà tốt nghiệp, mà còn là dấu mốc quan trọng khẳng định sự nỗ lực 
                    và ý chí bền bỉ suốt thời gian qua. Tuii thực sự tự hào vì Hà đã vượt qua tất cả một cách xuất sắc, 
                    đúng với con người đầy quyết tâm mà mình luôn ngưỡng mộ.
                  </p>
                  
                  <p>
                    Bước vào chặng đường mới, mong Hà sẽ luôn giữ vững tinh thần ấy, tự tin tỏa sáng và gặt hái 
                    nhiều thành công hơn nữa.
                  </p>
                  
                  <p>
                    Với Tiên, Hà không chỉ là đồng nghiệp mà còn là người bạn tuyệt vời – luôn đáng quý và đáng trân trọng. 
                    Hãy tiếp tục viết nên những điều thật đẹp ở chặng đường sắp tới nheaaa!!!
                  </p>
                  
                  <div className="signature">
                    <p>Mỹ Tiên!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery ảnh */}
      {showPhotoGallery && (
        <div className="photo-gallery-section">
          <h2 className="gallery-title">My Love</h2>
          
          <div className="photo-gallery">
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={photo1} alt="Khoảnh khắc đáng nhớ" />
              </div>
            </div>
            
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={photo2} alt="Kỷ niệm đẹp" />
              </div>
            </div>
            
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={img5} alt="Hành trình học tập" />
              </div>
            </div>
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={img6} alt="Hành trình học tập" />
              </div>
            </div>
            <div className="photo-frame">
              <div className="photo-placeholder">
                <img src={img7} alt="Hành trình học tập" />
              </div>
            </div>
            
            
          </div>
        </div>
      )}

      {/* Hình ảnh chúc mừng */}
      {showImages && (
        <div className="celebration-section">
          <h2 className="celebration-title">🎉 Chúc Mừng Tốt Nghiệp! 🎉</h2>
          
          <div className="celebration-grid">
            <div className="celebration-card">
              <div className="card-icon">🎓</div>
              <h3>Thành Công</h3>
              <p>Hà đã hoàn thành xuất sắc hành trình học tập</p>
            </div>
            
            <div className="celebration-card">
              <div className="card-icon">🌟</div>
              <h3>Tương Lai</h3>
              <p>Một tương lai tươi sáng đang chờ đón Hà</p>
            </div>
            
            <div className="celebration-card">
              <div className="card-icon">💪</div>
              <h3>Sức Mạnh</h3>
              <p>Hà có đủ sức mạnh để vượt qua mọi thử thách</p>
            </div>
            
            <div className="celebration-card">
              <div className="card-icon">🚀</div>
              <h3>Khởi Đầu</h3>
              <p>Hành trình mới đầy thú vị đang bắt đầu</p>
            </div>
          </div>

          <div className="confetti-container">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>✨ Chúc Hà thành công trong mọi lĩnh vực!</p>
      </footer>
    </div>
  )
}

export default App
