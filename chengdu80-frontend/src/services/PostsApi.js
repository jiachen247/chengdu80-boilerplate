import Client from "./Client";
const client = new Client({});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPosts: () => client.get("/todos"),
};
