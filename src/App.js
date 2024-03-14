import SignIn from "./component/SignIn";
import Cookies from "universal-cookie";
import { useState } from "react";
import Room from "./component/Room";

const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  return (
    <div className="">
      {isAuth ? (
        <div>{room ? "chat" : <Room setRoom={setRoom} />}</div>
      ) : (
        <SignIn setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default App;
