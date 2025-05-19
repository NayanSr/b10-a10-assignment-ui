/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddVisa = () => {
const {user}= useContext(AuthContext)

  const handleAddVisaSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;

    const formData = new FormData(e.target);
    const visaType = formData.get("visaType");

    const processingTime = form.processingTime.value;

    const requiredDocs = Array.from(
      e.target.querySelectorAll('input[name="requiredDoc"]:checked')
    ).map((checkbox) => checkbox.value);

    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = formData.get("applicationMethod");
    const createdBy= user?.email
    const visaData= {countryName,countryImage,visaType, processingTime,requiredDocs, description, ageRestriction, fee, validity,applicationMethod, createdBy}
    // console.log(visaData);

    fetch('https://b10a10-server-eight.vercel.app/addVisa',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify(visaData)
    })
    .then(res=>res.json())
    .then(data=>{
      form.reset();
      alert('Visa added Subbessfully')
    })
  };

  return (
    <div className="dark:bg-gray-700 dark:text-white border-2 border-gray-100 mb-6 max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 dark:bg-gray-700 dark:text-white">
        eVisa Application Form
      </h2>

      <form onSubmit={handleAddVisaSubmit} className="space-y-4 dark:bg-gray-700 dark:text-white">
        {/*//! Country Image */}
        <div className="dark:bg-gray-700 dark:text-white">
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Country Image URL
          </label>
          <input
            type="text"
            name="countryImage"
            placeholder="Enter image URL"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Country Name */}
        <div className="">
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Country Name
          </label>
          <input
            type="text"
            name="countryName"
            placeholder="Enter country name"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Visa Type Dropdown*/}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Visa Type
          </label>

          <input
            list="browsers"
            name="visaType"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <datalist id="browsers">
            <option value="Tourist visa" />
            <option value="Student visa" />
            <option value="Official visa" />
          </datalist>
        </div>

        {/*//! Processing Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Processing Time
          </label>
          <input
            type="number"
            name="processingTime"
            placeholder="Enter processing time (e.g., 7-10 days)"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Required Documents */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Required Documents
          </label>
          <input type="checkbox" name="requiredDoc" value=" Valid passport" />
          <label htmlFor="vehicle1"> Valid passport</label>
          <br />
          <input type="checkbox" name="requiredDoc" value="Visa application form" />{" "}
          <label htmlFor="vehicle2"> Visa application form</label>
          <br />
          <input type="checkbox" name="requiredDoc" value="Recent passport-sized photograph" />
          <label htmlFor="vehicle3"> Recent passport-sized photograph</label>
        </div>

        {/*//! Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter a brief description"
            className="w-full border border-gray-300 p-2 rounded-md"
          ></textarea>
        </div>

        {/*//! Age Restriction */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Age Restriction
          </label>
          <input
            type="number"
            name="ageRestriction"
            placeholder="Enter age restriction (e.g., 18+)"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Fee */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Fee (in USD)
          </label>
          <input
            type="number"
            name="fee"
            placeholder="Enter fee amount"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Validity */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Validity (in days)
          </label>
          <input
            type="number"
            name="validity"
            placeholder="Enter validity duration"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        {/*//! Application Method */}
        <div>
          <label className="block text-gray-700 font-medium mb-2 dark:bg-gray-700 dark:text-white">
            Application Method
          </label>
          <input
            list="methods"
            name="applicationMethod"
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          <datalist id="methods">
            <option value="Online" />
            <option value="In Person" />
          </datalist>
        </div>

        {/*//! Submit Button */}
        <input
          type="submit"
          value=" Submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

export default AddVisa;
