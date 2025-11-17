const ANALYZE_RESUME = gql`
  mutation AnalyzeResume($resumeId: ID!) {
    analyzeResume(resumeId: $resumeId) {
      score
      feedback
      strengths
      improvements
    }
  }
`;

export const useAnalyzeResume = () => {
  const [analyzeResumeMutation, { data, loading, error }] = useMutation(ANALYZE_RESUME);

  const analyzeResume = async (resumeId) => {
    try {
      const result = await analyzeResumeMutation({
        variables: { resumeId }
      });
      return result.data.analyzeResume;
    } catch (err) {
      console.error("Error analyzing resume:", err);
      throw err;
    }
  };

  return { analyzeResume, analysis: data?.analyzeResume, loading, error };
};
