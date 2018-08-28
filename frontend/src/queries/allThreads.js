import { gql } from 'apollo-boost';

export default gql`
{
  allThreads {
    id
    title
    body
  }
}
`;
