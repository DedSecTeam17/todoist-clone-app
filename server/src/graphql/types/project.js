export default `

  input getProjectInput {
    id: Int!
  }

  input createProjectInput {
    name: String!
  }

  input deleteProjectInput {
    id: Int!
  }

  input updateProjectInput {
    id: Int!
    name: String
  }

  type Project {
    id: Int!
    name: String!
    type: String!
  }

  type Query {
    getProject(input: getProjectInput): Project
    getProjects: [Project!]
  }

  type Mutation {
    createProject(input: createProjectInput): Project
    deleteProject(input: deleteProjectInput): Boolean
    updateProject(input: updateProjectInput): Project
  }
`;
