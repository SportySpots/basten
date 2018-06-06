import { HttpLink } from 'apollo-link-http/lib/httpLink';
import { execute, makePromise } from 'apollo-link/lib/index';
import { seedorfGraphQLUrl } from './app.config';

export const link = new HttpLink({
    uri: seedorfGraphQLUrl,
    headers: {
      cookie: null
    },
    fetchOptions: {
      // mode: 'no-cors',
    }
  }
);



export const query = async (q, variables={}) => {
  const operation = {
    query: q,
    variables,
    // operationName: { },
    context: {},
    extensions: {}
  };
  return makePromise(execute(link, operation))
}