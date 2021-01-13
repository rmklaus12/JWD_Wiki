| Action | HTTP Method   | Description                  |
| ------ | ------------- | ---------------------------- |
| Create | `POST`        | Creates a new resource       |
| Read   | `GET`         | Retrieves a resource         |
| Update | `PUT`/`PATCH` | Updates an existing resource |
| Delete | `DELETE`      | Deletes a resource           |

## Web Storage API

The Web Storage API defines two storage mechanisms:

-   Session Storage
-   Local Storage

Which are part of the set of storage options available: - Cookies - IndexedDB - The Cache API

-   Session and Local Storage provide a private area for data.
    -   _Session Storage_ maintains the data stored for the duration of the page session. Multiple windows and tabs on the same site will have different Session Storage instances, unlike cookies which are shared in all sessions.
    -   _Local Storage_ persists the data until it's explicity removed through JavaScript, or clearing the Browser cache / Locally Stored Data.
-   Both are **protocol specific**, therefore data stored when accessed using `http` is not avaialbe to sessions accessed using `https`.
-   Unlike cookies, Web Storage is only accessible in the browser.
-   Both Local and Session Storage are available on the `window` object and can be accessed using `sessionStorage` and `localStorage`and they both return a Storage object.
-   The Storage Object has a single property, `length`, relating to the number of data items stored.

### Methods

**`setItem(key, value)`**

`setItem()` adds an item to storage & accepts a key and a value as a string:

```
localStorage.setItem('username', 'rmklaus12')
localStorage.setItem('id', '311')
```

_Any value passed that is not a string will be converted to a string_

**`getItem(key)`**
`getItem()`retrieves a string value from storage using the key string used to store it:

```
localStorage.getItem('username') // 'rmklaus12'
localStorage.getItem('id') // '311'
```

**`removeItem(key)`**
`removeItem()` removes the item matching the `key` from storage:
`localStorage.removeItem('id')`

**`key(n)`**
Every item stored has an index number and the order of keys is user-agent defined so is not always consecutive.
_If a number is referenced that does not point to an item in storage,_ `null` _is returned_

**`clear()`**
`clear()` removes evertying from the storage object:

```
localStorage.setItem('a', 'a')
localStorage.setItem('b', 'b')
localStorage.length // 2
localStorage.clear()
localStorage.length // 0
```

A lot more data can be stored using the Web Storage API than can be in cookies.
Limits can vary, see https://web.dev/storage-for-the-web for more info.
A `try/catch` can be used to manage quota errors:

```
try {
	localStorage.setItem('key', 'value')
} catch (domException) {
	if (
		['QuotaExceededError','NS_ERROR_DOM_QUOTA_REACHED'].includes(
		domException.name
		)
	) {
// handle quota limited exceeded error
	}
}
```

You can use any string to set a value, but it is recommended to only use the Web Storage API objects (`setItem`, `getItem`, `removeItem`, `key`, `length`)
Example:
`localStorage.colorSettiNG = '#a4509b'`

### Resources

[MDNs Web Storage Demo page](https://mdn.github.io/dom-examples/web-storage/)

-   [source code](https://mdn.github.io/dom-examples/web-storage/)
