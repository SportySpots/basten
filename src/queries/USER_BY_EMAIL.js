import gql from 'graphql-tag';

export const USER_BY_EMAIL = gql`query user($email: String) {
    user(email: $email) {
        uuid
    }
}`