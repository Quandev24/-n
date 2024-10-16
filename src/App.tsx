import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";

const ToTinhPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (step: number) => {
    setCurrentStep(step);
    const audio = new Audio('/love-sound.mp3');
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  const handleSendMessage = () => {
    // Tự động chuyển hướng tới link Facebook của bạn
    window.location.href = 'https://www.facebook.com/quan.vayne.5/';
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
        <h1
          style={{
            fontSize: '2.5em',
            marginBottom: '10px',
            color: '#ff69b4',
          }}
        >
          Hè lố!
        </h1>
        <p
          style={{
            fontSize: '1.2em',
            margin: '10px 0',
            color: '#333',
          }}
        >
          Su nè!
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
              Nhưng mà Ân ơi hãy đặt niềm tin nơi Su 1 lần nhé, Su k dám hứa nhưng Su sẽ làm hết sức mình để Ân cảm thấy hạnh phúc nhất&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
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
              Hổng ấy em cho anh 1 cơ hội, để anh đi cùng em nha, anh thật sự hong biết nên nói sao nhưng anh rất muốn bên cạnh em rất nhiều&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
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
              Mình quen nhau nha&nbsp;<span style={{ display: 'inline' }}><CiHeart /></span>
            </p>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ToTinhPage;
