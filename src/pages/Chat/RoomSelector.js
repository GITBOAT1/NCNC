// RoomSelector.js
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const RoomSelector = ({ setRoom }) => {
  const roomInputRef = useRef(null);
  const navigate = useNavigate();

  const handleEnterChat = () => {
    const selectedRoom = roomInputRef.current.value.trim();
    if (selectedRoom) {
      setRoom(selectedRoom);
      navigate('/chat'); // Use navigate function to navigate to '/chat'
    }
  };

  return (
    <div className="room-selector">
      <label>Enter Room Name:</label>
      <input ref={roomInputRef} />
      <button onClick={handleEnterChat}>Enter Chat</button>
    </div>
  );
};
