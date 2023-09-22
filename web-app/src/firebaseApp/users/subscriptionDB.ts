import {typedCollection} from 'firebaseApp/converters';

export interface SubscriptionData {
  visibleName: string;
}

const subscriptionsDB = {
  subscriptionData: typedCollection<SubscriptionData>('subscriptionData'),
};

export {subscriptionsDB};
export default subscriptionsDB;
