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
        const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
        return regex.test(payload['name']);
    };

    if (!validateEmail(payload)) {
        return 'Invalid email address';
      }
      if (!validatePhoneNumber(payload)) {
        return 'Invalid phone number';
      }
      if (!validateFullName(payload)) {
        return 'Invalid full name';
      }
    else{
        return 'Sign Up Successful!';
    }
}

export default ValidationResult;