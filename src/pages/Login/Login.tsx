import "./Login.css";
import SignIn from "./SignInBox/SignIn";
import UniversalBox from "./UniversalBox/UniversalBox";
export default function Login() {
  return (
    <div className="login-main">
      <div className="container login-flex">
        <SignIn />
        <div className="universal-box-main">
          <UniversalBox
            suggestedList={[
              "Modify and track your orders",
              "Faster checkout",
              "Get a 10% discount for new customer",
            ]}
            title={"New to our company?"}
            subtext={"Create an account for the best experience"}
            buttonText={"create an account"}
          />

          <UniversalBox
            title={"New to our company?"}
            subtext={"Create an account for the best experience"}
            buttonText={"checkout as a guest"}
          />
        </div>
      </div>
    </div>
  );
}
