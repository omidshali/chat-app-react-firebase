import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../dataFirebase/firebase-config";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const SignIn = (props) => {
  const { setIsAuth } = props;
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <p>Sign In With Google To Continue:</p>
      <button
        onClick={signIn}
        className="bg-blue-700 text-white rounded-lg p-2"
      >
        Sign In With Google
      </button>
    </div>
  );
};

export default SignIn;
