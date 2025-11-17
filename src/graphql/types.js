export const ResumeInput = {
  title: String,
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    location: String,
    jobTitle: String
  },
  experience: [{
    title: String,
    company: String,
    startDate: String,
    endDate: String,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startDate: String,
    endDate: String
  }],
  skills: [String],
  professionalSummary: String,
  template: String,
  userId: String
};