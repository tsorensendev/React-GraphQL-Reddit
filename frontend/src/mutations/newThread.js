import { gql } from 'apollo-boost';

export default gql`
  mutation NewThread($title: String $body: String) {
    newThread(title: $title body: $body) {
      id
      title
      body
    }
  }
`;
