/* eslint-disable react/no-unescaped-entities */

const AddVisa = () => {
    return (
        <div>
          6. Add visa page:This will be a private/protected route.Create an Add visa page
where there will be a form for the user to add a visa. The form will have: <br />
○ Country image. (you can upload the country image to imgbb and
provide the image link here.) <br />
○ Country name. <br />
○ Visa_type. (dropdown.Options can be “Tourist visa”, “Student visa”,
“Official visa” etc. You must choose at least 3 visa types. <br />
○ Processing_time. <br />
○ Required_documents.(Multiple options can be selected through
checkboxes.Options can be “Valid passport", "Visa application
form", "Recent passport-sized photograph" etc.You must add at
least 3 checkboxes here.) <br />
○ Description. <br />
○ Age_restriction. (number field) <br />
○ Fee. (number field) <br />
○ Validity. <br />
○ Application_method. <br />
○ “Add visa” button <br />
● When you fill in the data and click the “Add visa” button, this data will be
stored in your database and you will show a success message through
toast/sweet alert. Also this newly added visa will be shown on the “All
visas” page. <br />
        </div> 
    );
};

export default AddVisa;