import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// ----------------------
// Fake Database
// ----------------------
let users = [];
let resumes = [];

const SECRET = "MY_SECRET_KEY";

// ----------------------
// GraphQL Schema
// ----------------------
const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type PersonalInfo {
    name: String
    email: String
    phone: String
    location: String
    jobTitle: String
  }

  type Experience {
    company: String
    role: String
    startDate: String
    endDate: String
    description: String
  }

  type Education {
    school: String
    degree: String
    startDate: String
    endDate: String
  }

  type Resume {
    id: ID!
    title: String!
    personalInfo: PersonalInfo
    experience: [Experience]
    education: [Education]
    skills: [String]
    professionalSummary: String
    template: String
  }

  input ResumeInput {
    title: String!
    personalInfo: PersonalInfoInput
    experience: [ExperienceInput]
    education: [EducationInput]
    skills: [String]
    professionalSummary: String
    template: String
  }

  input PersonalInfoInput {
    name: String
    email: String
    phone: String
    location: String
    jobTitle: String
  }

  input ExperienceInput {
    company: String
    role: String
    startDate: String
    endDate: String
    description: String
  }

  input EducationInput {
    school: String
    degree: String
    startDate: String
    endDate: String
  }

  type Analysis {
    score: Int
    feedback: String
    strengths: [String]
    improvements: [String]
  }

  type Query {
    resumes: [Resume]
    users: [User]
  }

  type Mutation {
    createResume(input: ResumeInput!): Resume
    updateResume(id: ID!, input: ResumeInput!): Resume
    analyzeResume(resumeId: ID!): Analysis

    signUp(name: String!, email: String!, password: String!): AuthPayload
    signIn(email: String!, password: String!): AuthPayload
  }
`;

// ----------------------
// Resolvers
// ----------------------
const resolvers = {
  Query: {
    resumes: () => resumes,
    users: () => users,
  },

  Mutation: {
    createResume: (_, { input }) => {
      const newResume = { id: String(Date.now()), ...input };
      resumes.push(newResume);
      return newResume;
    },

    updateResume: (_, { id, input }) => {
      const index = resumes.findIndex(r => r.id === id);
      if (index === -1) throw new Error("Resume not found");
      resumes[index] = { ...resumes[index], ...input };
      return resumes[index];
    },

    analyzeResume: (_, { resumeId }) => {
      return {
        score: 85,
        feedback: "This resume is strong but can improve.",
        strengths: ["Clear formatting", "Good experience"],
        improvements: ["Add more measurable achievements"]
      };
    },

    signUp: async (_, { name, email, password }) => {
      if (users.find(u => u.email === email)) {
        throw new Error("User already exists");
      }
      const hashed = await bcrypt.hash(password, 10);
      const user = { id: String(users.length + 1), name, email, password: hashed };
      users.push(user);

      const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });
      return { token, user: { id: user.id, name: user.name, email: user.email } };
    },

    signIn: async (_, { email, password }) => {
      const user = users.find(u => u.email === email);
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Incorrect password");

      const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });
      return { token, user: { id: user.id, name: user.name, email: user.email } };
    },
  }
};

// ----------------------
// Start Server
// ----------------------
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors());
app.use(bodyParser.json());

await server.start();
app.use("/graphql", expressMiddleware(server));

app.listen(4000, () => {
  console.log("🚀 GraphQL server running at http://localhost:4000/graphql");
});
