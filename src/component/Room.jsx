import { useRef } from "react";

const Room = (props) => {
  const { setRoom } = props;
  const roomInputRef = useRef(null);
  return (
    <div>
      <p>Rooms</p>
      <input ref={roomInputRef} type="text" placeholder="Enter Room Name..." />
      <button onClick={() => setRoom(roomInputRef.current.value)}>
        Enter Chat
      </button>
    </div>
  );
};

export default Room;
