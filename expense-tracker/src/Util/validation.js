export function validate(user,setError) {
    let tempError = {}

    if(!user?.name) tempError.nameErr = "name is required";
    else if (!/[a-zA-Z]+/.test(user?.name)) tempError.nameErr = "Invalid user name";
    
    if (!user?.email) tempError.emailErr = "email is required";
    else if (!/\S+@\S+\.\S+/.test(user?.email)) tempError.emailErr = "Invalid email id";
    
    if (!user?.mobile) tempError.mobileErr  = "mobile is required";
    else if (!/^(0|91|\+91)?[6-9]\d{9}$/.test(user?.mobile)) tempError.mobileErr = "Invalid indian mobile number";

    if(!user?.pass) tempError.passErr = "password is required";
    else if(!/^[A-Za-z0-9]{6,9}$/.test(user?.pass)) tempError.passErr = "Invalid password. min 6 char and max 9 characters.";

    setError(tempError)
    return Object.keys(tempError).length === 0;
}