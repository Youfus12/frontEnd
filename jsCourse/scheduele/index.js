// School Management Controllers using Regex

// Authentication and Authorization Controllers
const AuthController = {
    validateLogin: (username, password) => {
        const usernameRegex = /^[a-zA-Z0-9]{4,20}$/; // Alphanumeric, 4-20 chars
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/; // At least 1 uppercase, 1 digit, 8+ chars

        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);

        return isUsernameValid && isPasswordValid
            ? "Login successful!"
            : "Invalid username or password.";
    },

    validateRegistration: (email, role) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email format
        const roleRegex = /^(admin|teacher|student|parent)$/i; // Allowed roles

        const isEmailValid = emailRegex.test(email);
        const isRoleValid = roleRegex.test(role);

        return isEmailValid && isRoleValid
            ? "Registration successful!"
            : "Invalid email or role.";
    },
};

// Database Management Controllers
const DatabaseController = {
    validateUserProfile: (name, age) => {
        const nameRegex = /^[a-zA-Z\s]{2,50}$/; // Alphabetic, 2-50 chars
        const ageRegex = /^\d{1,2}$/; // 1-2 digit number

        const isNameValid = nameRegex.test(name);
        const isAgeValid = ageRegex.test(age);

        return isNameValid && isAgeValid
            ? "Valid user profile!"
            : "Invalid user profile details.";
    },

    validateClassSchedule: (className, time) => {
        const classNameRegex = /^[a-zA-Z0-9\s]{1,30}$/; // Alphanumeric, max 30 chars
        const timeRegex = /^([01]?\d|2[0-3]):[0-5]\d$/; // HH:MM 24-hour format

        const isClassNameValid = classNameRegex.test(className);
        const isTimeValid = timeRegex.test(time);

        return isClassNameValid && isTimeValid
            ? "Valid class schedule!"
            : "Invalid class schedule details.";
    },
};

// Academic and Attendance Management Controllers
const AcademicController = {
    validateAttendanceDate: (date) => {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format

        return dateRegex.test(date)
            ? "Valid attendance date!"
            : "Invalid date format.";
    },

    validateMarks: (marks) => {
        const marksRegex = /^(100|[1-9]?[0-9])$/; // 0-100

        return marksRegex.test(marks)
            ? "Valid marks!"
            : "Invalid marks.";
    },
};

// Communication and Notifications Controllers
const CommunicationController = {
    validateAnnouncement: (message) => {
        const messageRegex = /^[\w\s.,!?'-]{1,500}$/; // Alphanumeric + punctuation, max 500 chars

        return messageRegex.test(message)
            ? "Valid announcement!"
            : "Invalid announcement content.";
    },
};

// Finance and Fees Management Controllers
const FinanceController = {
    validateFeeAmount: (amount) => {
        const amountRegex = /^\d+(\.\d{1,2})?$/; // Valid currency format

        return amountRegex.test(amount)
            ? "Valid fee amount!"
            : "Invalid fee amount.";
    },
};

// Miscellaneous Controllers
const MiscController = {
    validateEventDetails: (eventName, date) => {
        const eventNameRegex = /^[a-zA-Z\s]{3,100}$/; // Alphabetic, 3-100 chars
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format

        const isEventNameValid = eventNameRegex.test(eventName);
        const isDateValid = dateRegex.test(date);

        return isEventNameValid && isDateValid
            ? "Valid event details!"
            : "Invalid event name or date.";
    },
};

// Example Usage
console.log(AuthController.validateLogin("Admin123", "Password1"));
console.log(DatabaseController.validateUserProfile("John Doe", "25"));
console.log(AcademicController.validateMarks("85"));
console.log(CommunicationController.validateAnnouncement("School will be closed tomorrow."));
console.log(FinanceController.validateFeeAmount("100.50"));
console.log(MiscController.validateEventDetails("Sports Day", "2025-01-15"));
