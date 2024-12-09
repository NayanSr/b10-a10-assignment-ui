
const MyAddedVisa = () => {
    return (
        <div>
            9. My added visas: It will be a private/protected route. On this page, a user can
see all the visas that he/she has added to the database. Here a user can only
see his/her added data, but he/she can not access other's data. Here you need
to show the data in cards. Each card will contain this informationa.
Country. <br />
b. Country image. <br />
c. Visa_type. <br />
d. Processing_time. <br />
e. Fee. <br />
f. Validity. <br />
g. Application_method. <br />
h. “Update” button. <br />
i. “Delete” button. <br />
● Clicking the “Update” button will open a modal where all visa information
will be shown in a form.User can change these information and submit the
form.Upon submitting the form visa data will be updated in the
database.Upon submitting the form the modal will also be closed.. <br />
● Clicking the “Delete” button will delete the visa data both from the “My
added visas” page and database.
        </div>
    );
};

export default MyAddedVisa;