import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { app } from '../config';

import { getAuthErrorMessage } from './getAuthErrorMessage';

const auth = getAuth(app);

export const signUp = async (email: string, password: string) => {
  let result = null,
    signUpError = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    signUpError = getAuthErrorMessage(error.code);
  }

  return { result, signUpError };
};
