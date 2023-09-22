## Firestore rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // TODO: enforce a one minute cooldown between writes
    // function isInCooldownSubscription (path) {
    // //return exists(path) && (get(path).updateTime - request.time) > duration.value(60, 's');
    // return false;
    // }
    match /{document=**} {
      allow read;
    }
    match /blogPosts/{blogSlug=**} {
      match /views/{uuid} {
        allow read;
        allow write;
      }
      match /comments/{comment} {
        allow read;
        allow write: if request.auth != null;
      }
      match /likes/{like} {
        allow read;
        allow write: if request.auth != null;
      }
  	}
    match /usersData/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
      match /blogsLiked/{blogSlug} {
        allow read, update, delete: if request.auth != null && request.auth.uid == userId;
        allow create: if request.auth != null;
      }
    }
    match /subscriptionData/{email} {
      // Allow read access to anyone
      allow read: if true;
      // Allow write access to anyone who provides a valid email as the document name and a name in the document data
      // allow write: if email.matches('.+@.+\\.\\w+') && !isInCooldownSubscription(/databases/$(database)/documents/subscriptionData/$(email));
      allow write: if email.matches('.+@.+\\.\\w+') && request.resource.data.visibleName is string;
    }
  }
}
```

## Notes

- ⚠️The last rule(`match /subscriptionData/{email}`) need to be reevaluated.
- The `isInCooldownSubscription` function is a really good addition, but initial attempt was not working.