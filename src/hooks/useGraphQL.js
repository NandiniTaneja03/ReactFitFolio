// src/hooks/useGraphQL.js
import { useQuery, useMutation, gql } from "@apollo/client";

// ---------------- GraphQL Operations ---------------- //

// --- Resume Queries & Mutations ---
const GET_RESUMES = gql`
  query GetResumes {
    resumes {
      id
      title
      personalInfo { name email phone location jobTitle }
      experience { company role startDate endDate description }
      education { school degree startDate endDate }
      skills
      professionalSummary
      template
    }
  }
`;

const CREATE_RESUME = gql`
  mutation CreateResume($input: ResumeInput!) {
    createResume(input: $input) {
      id
      title
      personalInfo { name email phone location jobTitle }
      experience { company role startDate endDate description }
      education { school degree startDate endDate }
      skills
      professionalSummary
      template
    }
  }
`;

const UPDATE_RESUME = gql`
  mutation UpdateResume($id: ID!, $input: ResumeInput!) {
    updateResume(id: $id, input: $input) {
      id
      title
      personalInfo { name email phone location jobTitle }
      experience { company role startDate endDate description }
      education { school degree startDate endDate }
      skills
      professionalSummary
      template
    }
  }
`;

// --- Auth Mutations ---
const SIGN_UP = gql`
  mutation SignUp($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      token
      user { id email name }
    }
  }
`;

const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user { id email name }
    }
  }
`;

// ---------------- Helpers ---------------- //

const sanitizeResumeInput = (resume) => {
  const { id, ...cleaned } = resume;
  return {
    ...cleaned,
    experience: resume.experience || [],
    education: resume.education || [],
    skills: resume.skills || []
  };
};

// ---------------- Resume Hooks ---------------- //

export const useResumes = () => {
  const { data, loading, error, refetch } = useQuery(GET_RESUMES);
  return { resumes: data?.resumes || [], loading, error, refetch };
};

export const useCreateResume = () => {
  const [createResumeMutation, { data, loading, error }] = useMutation(CREATE_RESUME);

  const createResume = async (resumeData) => {
    try {
      const sanitized = sanitizeResumeInput(resumeData);
      const result = await createResumeMutation({ variables: { input: sanitized } });
      return result.data.createResume;
    } catch (err) {
      console.error("Error creating resume:", err);
      throw err;
    }
  };

  return { createResume, data: data?.createResume, loading, error };
};

export const useUpdateResume = () => {
  const [updateResumeMutation, { data, loading, error }] = useMutation(UPDATE_RESUME);

  const updateResume = async (id, resumeData) => {
    try {
      const sanitized = sanitizeResumeInput(resumeData);
      const result = await updateResumeMutation({ variables: { id, input: sanitized } });
      return result.data.updateResume;
    } catch (err) {
      console.error("Error updating resume:", err);
      throw err;
    }
  };

  return { updateResume, data: data?.updateResume, loading, error };
};

// ---------------- Auth Hook ---------------- //

export const useAuth = () => {
  const [signUpMutation, { loading: signUpLoading, error: signUpError }] = useMutation(SIGN_UP);
  const [signInMutation, { loading: signInLoading, error: signInError }] = useMutation(SIGN_IN);

  const signUp = async (name, email, password) => {
    try {
      const result = await signUpMutation({ variables: { name, email, password } });
      if (result.data.signUp.token) {
        localStorage.setItem("token", result.data.signUp.token);
        localStorage.setItem("user", JSON.stringify(result.data.signUp.user));
      }
      return result.data.signUp;
    } catch (err) {
      console.error("SignUp error:", err);
      throw err;
    }
  };

  const signIn = async (email, password) => {
    try {
      const result = await signInMutation({ variables: { email, password } });
      if (result.data.signIn.token) {
        localStorage.setItem("token", result.data.signIn.token);
        localStorage.setItem("user", JSON.stringify(result.data.signIn.user));
      }
      return result.data.signIn;
    } catch (err) {
      console.error("SignIn error:", err);
      throw err;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const getCurrentUser = () => {
    const user = localStorage.getItem("user");
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
