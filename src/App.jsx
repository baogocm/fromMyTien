import { useState, useEffect } from 'react'
import './App.css'
// Import ảnh từ assets
import photo1 from './assets/img1.jpg'
import photo2 from './assets/img2.jpg'
import photo3 from './assets/img3.jpg'

function App() {
  const [showLetter, setShowLetter] = useState(false)
  const [showImages, setShowImages] = useState(false)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)
  const [showPhotoGallery, setShowPhotoGallery] = useState(false)

  useEffect(() => {
    // Hiển thị lá thư sau 1 giây
    const timer1 = setTimeout(() => setShowLetter(true), 1000)
    // Mở phong bì sau 2 giây
    const timer2 = setTimeout(() => setIsEnvelopeOpen(true), 2000)
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
        <h1 className="main-title">🎓 Chúc Mừng Tốt Nghiệp 🎓</h1>
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
                  <div className="stamp">🎓</div>
                </div>
                <div className="address-area">
                  <div className="to-label">Gửi đến:</div>
                  <div className="recipient">Hà - Cô bạn nhỏ nhắn</div>
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
                  <h2>Gửi cô bạn nhỏ nhắn, nhẹ nhàng và đầy nghị lực của tui!</h2>
                  
                  <p>
                    Vậy là hành trình đại học của Hà đã chính thức khép lại – một chặng đường đầy nỗ lực, 
                    kiên trì và biết bao cố gắng.
                  </p>
                  
                  <p>
                    Hà là kiểu người bước vào một căn phòng chỉ cần mỉm cười là đã khiến người khác cảm thấy 
                    thoải mái. Tui tin, chính sự nhẹ nhàng ấy, cộng với tài năng và sự cố gắng bền bỉ, 
                    sẽ đưa Hà đến những nơi xứng đáng trong tương lai.
                  </p>
                  
                  <p>
                    Chúc Hà sau ngày hôm nay sẽ càng rực rỡ hơn nữa – trong công việc, trong cuộc sống 
                    và trong chính hành trình trưởng thành của mình. Dù chặng đường phía trước có thử thách 
                    hay ngã rẽ bất ngờ, hy vọng Hà vẫn sẽ giữ được tâm hồn dịu dàng ấy, và luôn biết mình 
                    đang đi về phía nào.
                  </p>
                  
                  <p>
                    Tui thấy rất vui vì đã từng có một khoảng thời gian đi chung với một người tuyệt vời 
                    như Hà. Tốt nghiệp chỉ là bắt đầu – còn bao nhiêu điều tuyệt vời đang chờ phía trước, 
                    cô gái bé nhỏ iu ơi.
                  </p>
                  
                  <div className="signature">
                    <p>Mỹ Tiên!</p>
                    <p className="signature-name">Người đồng đội cùng ăn trưa trong căn phòng máy lạnh mát rượi kkkk</p>
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
          <h2 className="gallery-title">📸 Những Khoảnh Khắc Đáng Nhớ</h2>
          
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
                <img src={photo3} alt="Hành trình học tập" />
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
