import { useMutation } from '@apollo/client';
import { SIGN_UP, SIGN_IN } from '../graphql/operations';
import client from '../apollo/client';

export const useAuth = () => {
  const [signUpMutation, { loading: signUpLoading, error: signUpError }] = useMutation(SIGN_UP, { client });
  const [signInMutation, { loading: signInLoading, error: signInError }] = useMutation(SIGN_IN, { client });

  const signUp = async (name, email, password) => {
    try {
      const { data } = await signUpMutation({ variables: { name, email, password } });
      if (data.signUp.token) {
        localStorage.setItem('token', data.signUp.token);
        localStorage.setItem('user', JSON.stringify(data.signUp.user));
      }
      return data.signUp;
    } catch (err) {
      console.error("SignUp error:", err);
      throw err;
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await signInMutation({ variables: { email, password } });
      if (data.signIn.token) {
        localStorage.setItem('token', data.signIn.token);
        localStorage.setItem('user', JSON.stringify(data.signIn.user));
      }
      return data.signIn;
    } catch (err) {
      console.error("SignIn error:", err);
      throw err;
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  return {
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    signUpLoading,
    signInLoading,
    signUpError: signUpError?.message,
    signInError: signInError?.message,
  };
};
