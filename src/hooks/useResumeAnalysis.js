import { gql, useMutation } from "@apollo/client";

const ANALYZE_RESUME = gql`
  mutation AnalyzeResume($resumeId: String!, $file: Upload!) {
    analyzeResume(resumeId: $resumeId, file: $file) {
      score
      feedback
      strengths
      improvements
    }
  }
`;

export function useAnalyzeResume() {
  const [analyzeResumeMutation, { data, loading, error }] =
    useMutation(ANALYZE_RESUME);

  const analyzeResume = async (resumeId, file) => {
    return analyzeResumeMutation({
      variables: { resumeId, file },
    });
  };

  return {
    analyzeResume,
    analysis: data?.analyzeResume,
    loading,
    error,
  };
}
