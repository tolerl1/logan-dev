import gql from 'graphql-tag'
export const getPinned = gql`
query {
  user(login: "tolerl1") {
    pinnedItems(first: 7, types: [REPOSITORY, GIST]) {
      edges {
        node {
          ... on Repository {
            name
            description
            languages(orderBy: {direction: DESC, field: SIZE}, first: 10) {
              nodes {
                name
              }
            }
            url
            diskUsage
          }
        }
      }
    }
  }
}
`
