import { createClient } from 'urql';

const url = 'http://localhost:1337/graphql';
export const client = createClient({ url });
