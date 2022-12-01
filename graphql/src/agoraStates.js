import { graphql } from "@octokit/graphql";

const agoraStates = async () => {
  const graphqlwithAuth = graphql.defaults({
    headers: {
      authorization: `token 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`,
    },
  });

  const { repository } = await graphqlwithAuth(
    `
      {
        repository(owner: "codestates-seb", name: "agora-states-fe") {
          discussions(first: 10) {
            edges {
              node {
                title
                url
              }
            }
          }
        }
      }
    `
  );
  return repository;
};

export default agoraStates;