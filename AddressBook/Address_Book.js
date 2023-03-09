console.log("Welcome to Address-Book-System-using-JS")
//UC-02--->Ability to ensure Valid Contacts are added... 
const name = RegExp("^[A-Z]{1}[a-z]{2,}$");
const address = RegExp("^[a-zA-z0-9#,]{4,}$");
const cityState = RegExp("^[a-zA-z]{4,}$");
const zip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumber = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const email = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact {
    // Constructor
    // @param  {...any} param - above mentioned fields.    
    constructor(...params) {
      this.firstName = params[0];
      this.lastName = params[1];
      this.city = params[2];
      this.state = params[3];
      this.zip = params[4];
      this.phoneNumber = params[5];
      this.email = params[6];
    }
    // Getters for all fields
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    get city() {
      return this._city;
    }
  
    get state() {
      return this._state;
    }
  
    get zip() {
      return this._zip;
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
  
    get email() {
      return this._email;
    }
  
     //Setters for all fields
    set firstName(firstName) {
      if (name.test(firstName)) this._firstName = firstName;
      else throw "**** FIRST NAME is Incorrect ****";
    }
  
    set lastName(lastName) {
      if (name.test(lastName)) this._lastName = lastName;
      else throw "**** LAST NAME is Incorrect ****";
    }
  
    set address(address) {
      if (address.test(address)) this._address = address;
      else throw "**** ADDRESS is Incorrect ****";
    }
  
    set city(city) {
      if (cityState.test(city)) this._city = city;
      else throw "**** CITY is Incorrect ****";
    }
  
    set state(state) {
      if (cityState.test(state)) this._state = state;
      else throw "**** STATE is Incorrect ****";
    }
  
    set zip(zip) {
      if (zip.test(zip)) this._zip = zip;
      else throw "**** ZIP is Incorrect ****";
    }
  
    set phoneNumber(phoneNumber) {
      if (phoneNumber.test(phoneNumber)) this._phoneNumber = phoneNumber;
      else throw "**** PHONE NUMBER is Incorrect ****";
    }
  
    set email(email) {
      if (email.test(email)) this._email = email;
      else throw "**** EMAIL ADDRESS is Incorrect ****";
    }
   
     //To String Method
    toString() {
      return (
        "First Name : " +
        this.firstName +
        ", Last Name : " +
        this.lastName +
        ", City : " +
        this.city +
        ", State : " +
        this.state +
        ", Zip : " +
        this.zip +
        ", Phone Number : " +
        this.phoneNumber +
        ", Email : " +
        this.email
      );
    }
  }
  
 // Using array to store the contacts.
// We are using the push method to add the contact in the array
  let addressBookArray = new Array();
  

   // Function to check if the contact exists in array.
  function contactExists(firstName, lastName) {
    return addressBookArray.some(
      (contact) => contact.firstName == firstName && contact.lastName == lastName
    );
  }
  
  
   // Function to edit the contact
  function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
      switch (property) {
        case "city":
          addressBookArray.find(
            (contact) => contact.firstName == firstName
          ).city = newValue;
          break;
        case "state":
          addressBookArray.find(
            (contact) => contact.firstName == firstName
          ).state = newValue;
          break;
        case "zip":
          addressBookArray.find((contact) => contact.firstName == firstName).zip =
            newValue;
          break;
        case "phoneNumber":
          addressBookArray.find(
            (contact) => contact.firstName == firstName
          ).phoneNumber = newValue;
          break;
        case "email":
          addressBookArray.find(
            (contact) => contact.firstName == firstName
          ).email = newValue;
          break;
        default:
          console.log("Enter valid property");
      }
    } else {
      console.log("Contact Does Not Exist");
    }
  }

   // Function to delete a contact
  function deleteContact(firstName, lastName) {
    if (contactExists(firstName, lastName)) {
      addressBookArray = addressBookArray.filter(
        (contact) =>
          contact.firstName != firstName && contact.lastName != lastName
      );
    } else {
      console.log("Contact Does Not Exist");
    }
  }
  
   // Add Cotact to Array
   
  try {
    addressBookArray.push(
      new Contact(
        "Rinku",
        "Berde",
        "Mumbai",
        "Maharashtra",
        "410387",
        "91-9876543219",
        "rinku@gmail.com"
      )
    );
  } catch (e) {
    console.error(e);
  }
  try {
    addressBookArray.push(
      new Contact(
        "Omkar",
        "Mane",
        "Pune",
        "Maharashtra",
        "410387",
        "91-9876543219",
        "omkar@gmail.com"
      )
    );
  } catch (e) {
    console.error(e);
  }
  
   // Function to count the contacts in the array
   // We have used the reduce method to call the specified function for all the elements in an array.
   
  function getCountOfContacts(count) {
    count += 1;
    return count;
  }
  console.log(addressBookArray);
  console.log(
    "\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0)
  );

   // Function to search contact by city  
  function searchContactByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city);
  }
  
   //  Function to get count by city
   // We are using the filter method and length to get the count.
  function getCountOfContactsByCity(city) {
    return (
      "Count of Contacts in " +
      city +
      " is: " +
      addressBookArray.filter((contact) => contact.city == city).length
    );
  }
  
   //Function to sort the array in asscending order.
  function sortAddressBookByCity() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.city.localeCompare(secondPerson.city)
    );
    console.log(addressBookArray);
  }
  
  function sortAddressBookByState() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.state.localeCompare(secondPerson.state)
    );
    console.log(addressBookArray);
}
function sortAddressBookByState() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.state.localeCompare(secondPerson.state)
    );
    console.log(addressBookArray);
  }
  
  function sortAddressBookByZip() {
    addressBookArray.sort((firstPerson, secondPerson) =>
      firstPerson.zip.localeCompare(secondPerson.zip)
    );
    console.log(addressBookArray);
  }
  sortAddressBookByName();