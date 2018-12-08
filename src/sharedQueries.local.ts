import { gql } from 'apollo-boost';

export const LOG_USER_IN = gql`
    mutation logUserIn($token: String!){
        logUserIn(token:$token) @client #client쪽에서 실행된다는것을 명시함(apollo.ts에서 실행)
    }
`;