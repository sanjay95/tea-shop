import "./SignIn.css";
import mail from "../../../images/icons/mail.png";
import pass from "../../../images/icons/redeem.png";
import Input from "./Input";
export default function SignIn() {
  return (
    <div className="signin-box">
      <h1>Already a customer?</h1>
      <p>Welcome back! Sign in for faster checkout.</p>
      <div className="inputs-main">
        <Input mail={mail} placeholder={"Enter Email"} />
        <Input mail={pass} placeholder={"Enter Password"} />
      </div>
      <div className="signin-bottomside">
        <div className="bottomside-flex">
          <form>
            <input type="checkbox" id="chkbx" />
            <label htmlFor="chkbx">Rember me</label>
          </form>
          <p>Forget Password?</p>
        </div>
        <button>SIGN IN</button>
      </div>
    </div>
  );
}
