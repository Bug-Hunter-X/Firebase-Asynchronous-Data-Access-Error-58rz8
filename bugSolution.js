To fix this, ensure you access the data within the `.then()` block after the promise has resolved.  Always check for null or undefined values before accessing nested properties:

```javascript
db.collection('users').doc('someId').get().then(doc => {
  if (doc.exists) {
    const userData = doc.data();
    if (userData && userData.name) {
      console.log(userData.name);
    } else {
      console.log('User data or name property is missing');
    }
  } else {
    console.log('No such document!');
  }
});
```

This improved version checks if the document exists (`doc.exists`) and if the `userData` and `name` properties are defined before accessing them, preventing the error.