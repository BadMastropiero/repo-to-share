import {usersDB} from './users/usersDB';
import {subscriptionsDB} from './users/subscriptionDB';

const db = {
  users: usersDB,
  subscriptions: subscriptionsDB,
};

export {db};
export default db;
