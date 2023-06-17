export function getAuthErrorMessage(errorCode) {
    switch (errorCode) {
        case 'auth/user-not-found':
            return 'User not found. Please check your email address.';
        case 'auth/wrong-password':
            return 'Invalid password. Please try again.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters. Please try again.';
        default: 
            return 'An error occurred. Please try again later.';
    }
}