import { useContext, useEffect, useState } from "react";
import "./Address.css";


import useInitiateAddressRequest from '../../../hooks/useInitiateAddressRequest';
import { useNavigate } from "react-router-dom";
import Suggestion from "./CoffeeBasedSuggestions/suggestion"
import ModalPopup from "../../../components/ModalPopup/ModalPopup";
import SuggestProducts from "../../../components/SuggestProducts/SuggestProducts";
import Product from "../../../components/SuggestProducts/Product";
import { MyContext } from "../../../API/Context";


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
  const ctx = useContext(MyContext);
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
    console.log('coffeeData', coffeeData);


    navigate("/payment/delivery");
    setOpen(true);


  }, [addressData])

  useEffect(() => {

    if (coffeeData) { ctx.setFreeDelivery(true); }

  }, [coffeeData])

  useEffect(() => {
    if (!errorDescription) return

    navigate("/payment/delivery");


  }, [errorDescription]);


  return (
    <div className="address-container">
      <div className="shipping-address">
        <ModalPopup open={open} onClose={() => setOpen(false)}>
          <div style={{ paddingLeft: "14rem", paddingBottom: "2rem" }}>
            <h2>We value our fellow Coffee enthusiast</h2>
          </div>
          <p>Based on your coffee habbit, we have some tea suggestion for you</p>
          <div style={{ paddingLeft: "20rem", paddingTop: "2rem" }}>
            <h3>You May Also Like</h3>
          </div>
          <div className="suggest-products-flex">
            <Product />
          </div>
        </ModalPopup>

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
            <option>Country</option>
            <option>Australia</option>
            <option>India</option>
            <option>Singapore</option>
            <option>Germany</option>

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
      </div>
      {coffeeData &&
        <div className="billing-address">

          {/* <h1 style={{animation:"running", animationIterationCount:"infinite", animationTimingFunction:"cubic-bezier(1.0,0,0,1.0)",animationDuration:"1s"}}> */}
          <h1 style={{ color: "rosybrown" }}>Special Offcer for you
          </h1>
          <p>We noticed your affinity for premium <span style={{ color: "brown" }}>coffee</span> spending</p>
          <p>We would love to have you as our regulars !</p>
          <p>We are offering you <span style={{ color: "red", fontWeight: "bold" }}> FREE</span> delivery on tea purchase</p>
          <p style={{ color: "brown" }}> Happy <span style={{ color: "green" }}>Brewing</span> !</p>
          <div>


          </div>
        </div>
      }
    </div >
  );
};

export default Address;
