import '../../style/Room.css';

const Room = () => {
    return (
      <div className="room-container">
        <div className="room-title">החדרים שלנו</div>
        <div className="room-content">
          <img className="room-image" src="src/assets/room1.png" alt="Room 1" />
          <div className="room-details">
            <img className="room-image-shadow" src="src/assets/room2.png" alt="Room 2" />
            <div className="room-icons">
              <div className="icon">
                <div className="icon-inner"><img src="src/assets/Frame1.svg" alt="" /></div>
              </div>
              <div className="icon">
                <div className="icon-inner"> <img src="src/assets/Frame1.svg" alt="" /></div>
              </div>
              <div className="icon">
                <div className="icon-inner"><img src="src/assets/Frame1.svg" alt="" /></div>
              </div>
              <div className="icon">
                <div className="icon-inner"><img src="src/assets/Frame1.svg" alt="" /></div>
              </div>
              <div className="icon">
                <div className="icon-inner"><img src="src/assets/Frame.svg" alt="" /></div>
              </div>
            </div>
            <div className="room-circle">
              <div className="circle-outer">
                <div className="circle-inner"><img src="src/assets/Frame 48.svg" alt="" /></div>
              </div>
              <div className="circle-arrow"></div>
            </div>
            <div className="room-text"><img src="src/assets/artillery.png" alt="" /></div>
          </div>
          <img className="room-image" src="src/assets/room3.png" alt="Room 3" />
        </div>
      </div>
    );
  };
  
  export default Room;