import { useEffect, useState } from "react";
import "./Address.css";


import useInitiateAddressRequest from '../../../hooks/useInitiateAddressRequest';
import { useNavigate } from "react-router-dom";
import Suggestion from "./CoffeeBasedSuggestions/suggestion"


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  postCode: string;
  city: string;
  country: string;
}

interface CoffeeHabbit {

  monthlySpend: string,
  dailyCups: string,
  lastUpdated: string,
  favoriteCoffee: string,
  avergaeSpendPerCup: string

}

interface AddressProps {
  onFormValidityChange: (isValid: boolean) => void;
}
const hostUrl = "http://localhost:5173";

const Address = ({ onFormValidityChange }: AddressProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    postCode: "",
    city: "",
    country: "Country",
  });
  const [coffeeData, setCoffeeData] = useState<CoffeeHabbit>();
  const [open, setOpen] = useState(false);


  const checkFormValidity = () => {
    // Add your validation rules here
    const isFirstNameValid = formData.firstName.trim() !== "";
    const isLastNameValid = formData.lastName.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isStreetValid = formData.street.trim() !== "";
    const isPostCodeValid = formData.postCode.trim() !== "";
    const isCityValid = formData.city.trim() !== "";
    const isCountryValid = formData.country !== "Country";

    // Check if all fields are valid
    const isValid =
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isStreetValid &&
      isPostCodeValid &&
      isCityValid &&
      isCountryValid;

    onFormValidityChange(isValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const { isInitializing, isExtensionInstalled, handleInitiate,
    isLoading, error, errorDescription,
    data: addressData } = useInitiateAddressRequest({ callbackUrl: `${hostUrl}/payment/delivery`, doVerification: false });

  const navigate = useNavigate();
  useEffect(() => {
    if (!addressData) return
    // console.log('data', addressData);
    sessionStorage.setItem("address", JSON.stringify(addressData));
    setFormData((previousState) => {
      return {
        ...previousState,
        firstName: addressData.givenName,

        lastName: addressData.familyName,
        email: addressData.email,
        street: addressData.formatted,
        postCode: addressData.postalCode,
        city: addressData.locality,
        country: addressData.country,

      }

    })
    setCoffeeData((previousState) => {
      return {
        ...previousState,
        monthlySpend: addressData.monthlySpend,
        dailyCups: addressData.dailyCups,
        lastUpdated: addressData.lastUpdated,
        favoriteCoffee: addressData.favoriteCoffee,
        avergaeSpendPerCup: addressData.avergaeSpendPerCup
      }
    })

    navigate("/payment/delivery");
    setOpen(true);
    console.log('popstatus', open)

  }, [addressData])

  useEffect(() => {
    if (!errorDescription) return

    navigate("/payment/delivery");


  }, [errorDescription]);


  return (
    <div className="address-container">
      <div className="shipping-address">

        {open &&
          <>
            <Suggestion text="Testing the popuo" closePopup={() => setOpen(false)}>

            </Suggestion>
          </>
        }

        {errorDescription && <div style={{ color: "red" }}> {error}:  {errorDescription} </div>}
        <form className="shipping-address__form">
          <h1>Shipping Address</h1>
          <input
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <input
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            placeholder="Street and"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div>
            <input
              placeholder="Post Code"
              name="postCode"
              value={formData.postCode}
              onChange={handleInputChange}
            />
            <input
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <select
            placeholder=""
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          >
            <option>State</option>
            <option>Karnataka</option>
            <option>Delhi</option>
            <option>Kerala</option>
            <option>Tamilnadu</option>
            <option>Maharastra</option>
            <option>Rajshthan</option>
            <option>Madhya Pradesh</option>
            <option>Bihar</option>
            <option>Uttar Pradesh</option>
            <option>West bengal</option>
            <option>Jharkhand</option>
          </select>
        </form>
        {!addressData && <div onClick={handleInitiate} style={{ paddingTop: "2rem" }}>
          <button
            // containerStyles={{ padding: 0, paddingTop: '1rem',  }}
            style={{
              width: "100%",
              position: "relative", display: "flex", alignSelf: "center", alignItems: "center",
              padding: "1.5rem 3rem",
              backgroundColor: "rgb(29, 88, 252)",
              border: "2px solid rgb(29, 88, 252)",
              borderRadius: "40px",
              boxSizing: "border-box",
              color: "rgb(255, 255, 255)",
              cursor: "pointer",
              transition: "all 0.125s ease-in-out 0s"
            }} >
            Fetch from Vault
          </button>
        </div>
        }
        <button onClick={()=>{setOpen(true); console.log('clicked')}}> click</button>
      </div>
      <div className="billing-address">
        <h1>Billing Address</h1>
        <p>(same as shipping address)</p>
        <div>
          <input type="checkbox" id="address" />
          <label htmlFor="address" id="address">
            <p>Bill to a different address</p>
          </label>
        </div>
      </div>
    </div >
  );
};

export default Address;
