import "./SignIn.css";
interface inputInterface {
  mail: string;
  placeholder: string;
}
export default function Input({ mail, placeholder }: inputInterface) {
  return (
    <div className="input">
      <img src={mail} alt="" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
