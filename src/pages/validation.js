function ValidationResult(payload){
    const validateEmail = (payload) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(payload['email']);
      };

    const validatePhoneNumber = (payload) => {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(payload['contactNo']);
    };

    const validateFullName = (payload) => {
        const regex = /^[a-z ]+$/i;
        const lengthWithoutSpaces = payload['name'].replace(/\s/g, '').length;
        return regex.test(payload['name']) && lengthWithoutSpaces >= 2;
    };

    if (!validateEmail(payload)) {
        return 'Please enter valid email address';
      }
      if (!validatePhoneNumber(payload)) {
        return 'Please enter 10 digit phone number';
      }
      if (!validateFullName(payload)) {
        return 'Please enter valid fullname with no special character. Minimum two characters';
      }
    else{
        return 'Sign Up Successful!';
    }
}

export default ValidationResult;