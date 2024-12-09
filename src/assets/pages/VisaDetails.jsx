
const VisaDetails = () => {
    return (
        <div>
           8. Visa details page: private/protected route. Please make sure that if the user is
not logged in, the private route redirects to the login page. On this page, you will
show all the information you have stored in the database about the visa. <br />
● Add a “Apply for the visa” button on this page.Clicking the “Apply for the
visa” button will open a modal where the logged in user can submit their
information through a form.The form will have several input fields- <br />
○ Email (logged in users email) <br />
○ FirstName <br />
○ LastName <br />
○ Applied date(current date) <br />
○ Fee (visa fee) <br />
○ “Apply” button. <br />
On clicking the “Apply button” the data will be stored in the database and
also this data will be shown on the “My visa applications” page (see requirement
10).
        </div>
    );
};

export default VisaDetails;