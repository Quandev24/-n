import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import myImage from './456789.jpg'; // Path to the image

const ToTinhPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const handleNextStep = (step: number) => {
    setCurrentStep(step);
    const audio = new Audio('/love-sound.mp3');
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  const handleSendMessage = () => {
    setShowImage(true); // Set state to show the image
    setCurrentStep(0); // Reset current step to hide previous content
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://source.unsplash.com/random/1920x1080/?love")',
        backgroundSize: 'cover',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          transition: 'transform 0.3s',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        {showImage ? ( // Conditional rendering based on showImage state
          <div>
            <img
              src={myImage}
              alt="Download"
              style={{
                borderRadius: '10px',
                maxWidth: '80%', // Limit image width
                height: 'auto',
              }}
            />
          </div>
        ) : (
          <>
            <h1
              style={{
                fontSize: '2.8em',
                marginBottom: '10px',
                color: '#ff69b4',
              }}
            >
              Hè lố!
            </h1>
            <p
              style={{
                fontSize: '1.8em',
                margin: '10px 0',
                color: '#333',
              }}
            >
              Su nè!
            </p>
            <p
              style={{
                fontSize: '1.2em',
                margin: '10px 0',
                color: '#333',
              }}
            >
            Nhân ngày đặc biệt này, Su muốn gửi đến Ân những lời chúc thật ấm áp và chân thành nhất. Su hy vọng Ân sẽ luôn cười thật tươi, hạnh phúc mỗi ngày và mãi rạng rỡ như chính con người của Ân.
          </p>
        {currentStep === 0 && (
          <button
            style={{
              padding: '10px 20px',
              fontSize: '1.2em',
              color: '#fff',
              backgroundColor: '#ff69b4',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.3s',
              marginTop: '10px',
            }}
            onClick={() => handleNextStep(1)}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1493')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff69b4')}
          >
            Nhần vào đi mà!
          </button>
        )}

        {currentStep >= 1 && (
          <div style={{ marginTop: '20px' }}>
            <p
              style={{
                fontSize: '1.2em',
                color: '#333',
                animation: 'fadeIn 0.5s',
              }}
            >
              Tao biết tao hay nhớ nhớ quên quên rất nhiều, còn nhiều khuyết điểm chưa sửa lại kịp để mày không thích tao&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
            </p>
            {currentStep === 1 && (
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '1.2em',
                  color: '#fff',
                  backgroundColor: '#ff69b4',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.3s',
                  marginTop: '10px',
                }}
                onClick={() => handleNextStep(2)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1493')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff69b4')}
              >
                Tiếp nè!
              </button>
            )}
          </div>
        )}

        {currentStep >= 2 && (
          <div style={{ marginTop: '20px' }}>
            <p
              style={{
                fontSize: '1.2em',
                color: '#333',
                animation: 'fadeIn 0.5s',
              }}
            >
              Su thật sự rất muốn ở bên cạnh Ân &nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
            </p>
            {currentStep === 2 && (
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '1.2em',
                  color: '#fff',
                  backgroundColor: '#ff69b4',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.3s',
                  marginTop: '10px',
                }}
                onClick={() => handleNextStep(3)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1493')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff69b4')}
              >
                Chưa hết đâu<CiHeart /><CiHeart /><CiHeart />
              </button>
            )}
          </div>
        )}

        {currentStep >= 3 && (
          <div style={{ marginTop: '20px' }}>
            <p
              style={{
                fontSize: '1.2em',
                color: '#333',
                animation: 'fadeIn 0.5s',
              }}
            >
              Em hay thử đặt niềm tin nơi anh 1 lần nha, anh sẽ dùng hành động để chứng minh lời nói của minh, anh sẽ không để em phải hối hận hay là thất vọng đâu&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
            </p>
            {currentStep === 3 && (
              <button
                style={{
                  padding: '10px 20px',
                  fontSize: '1.2em',
                  color: '#fff',
                  backgroundColor: '#ff69b4',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s, transform 0.3s',
                  marginTop: '10px',
                }}
                onClick={() => handleNextStep(4)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff1493')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ff69b4')}
              >
                Cái cuối rùi nè<CiHeart />
              </button>
            )}
          </div>
        )}

        {currentStep >= 4 && (
          <div style={{ marginTop: '20px' }}>
            <p
              style={{
                marginTop: '20px',
                fontSize: '1.2em',
                color: '#333',
                animation: 'fadeIn 0.5s',
              }}
            >
              Em đồng ý làm người yêu anh nha&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
            </p>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              {!showImage && ( // Ensure the button is only visible if showImage is false
                <button
                  style={{
                    padding: '10px 20px',
                    fontSize: '1.2em',
                    color: '#fff',
                    backgroundColor: '#ff69b4',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, transform 0.3s',
                    marginTop: '20px',
                  }}
                  onClick={handleSendMessage}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2E8B57')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#32CD32')}
                >
                  Đồng ý <CiHeart />
                </button>
              )}
            </div>
          </div>
        )}
      </>
        )}
    </div>
    </div >
  );
};

export default ToTinhPage;
