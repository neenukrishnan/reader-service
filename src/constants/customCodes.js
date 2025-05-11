module.exports = {
  statusCodes: {
    // 1xxx: Success responses
    1000: "Success",
    1001: "Created",
    1002: "OTP Generated",
    1003: "OTP Verified",
  },
  errorCodes: {
    // 2xxx: Client-side input errors
    2000: "Invalid Input",
    2001: "Missing field",
    2002 : "Role is mandatory",
    2003 : "Invalid Role",
    2004 : "Username is mandatory",
    2009: "Aadhar card is mandatory",
    2005: "Invalid ObjectId",
    2020: "Mobile already used",
    2021: "Email already used",
    2022: "Aadhar already used",

    // 3xxx: Access denied errors
    3000: "Access Denied",
    3001: "No token",
    3002: "Invalid/Expired token",
    3010: "OTP Expired",

    // 4xxx: Not found errors
    4000: "Not found",
    4001: "User not found",
    4002: "Owner not found",
    4003: "Driver not found",
    4004: "End user not found",
    4005: "Already a pending request",
   

    // 8xxx: Internal server errors
    8000: "Internal server error",
    8001: "Notification send failure",
  },
};