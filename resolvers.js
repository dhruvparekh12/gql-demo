import { Job, Company } from "./db.js";

export const resolvers = {
  Query: {
    job: (root, args) => Job.findById(args.id),
    jobs: () => Job.findAll(),
    company: (root, args) => Company.findById(args.id),
  },

  Job: {
    company: (job) => {
      return Company.findById(job.companyId);
    },
  },

  Company: {
      jobs: (company) => Job.findAll((job) => job.companyId === company.id)
  }
};
