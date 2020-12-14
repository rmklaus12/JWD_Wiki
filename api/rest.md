## REST

**RE**presentational **S**tate **T**ransfer
:Architectural style for provding standards between computer systems on the web, making it easier for systems to communication with each other.
**REST**ful systems are characterised by how they are stateless and separate the concerns of client and server.

-   Implementation of the client and the server can be done independently
-   Stateless means that the server doesn't need to know about what state the client is in and vice-versa.
-   Stateless uses _resources_ rather than _commands_. Resources describe any object, document or _thing_ htat you may need to store or send to other services.
-   REST systems do not rely on implementation of interfaces
-   RESTful applications are reliable, quick, and scalable.

Requests
: clients send requests to servers to retrieve or modify data on the server.
A request generally consists of: - an HTTP verb - a _header_ - a path to a resource - an optional message body containing data

HTTP Verbs
: There are 4 basic verbs used in requests

    | Action | HTTP Method | Description |
    | ------ | ------------- | ------------------- |
    | Create | `POST` | Creates a new resource |
    | Read | `GET` | Retrieves a resource |
    | Update | `PUT`/`PATCH` | Updates an existing resource |
    | Delete | `DELETE` | Deletes a resource |

CRUD
: **C**reate, **R**ead, **U**pdate, **D**elete.
APIs should be able to do these four basic functions.

-   Provides a framework for reminding devs on how to construct full, usable models.
-   In a library database, there might be a `books` resources that stores `book` objects. We would want to be able to **create** a new book, **read** (or list) all books in the database, **update** information about the book, and **delete** to remove a book from the database.
-   In a REST environment, CRUD often corresponds to the HTTP methods (Post, Get, Put, Delete respecitvely). These are the fundamental elements of a persistent storage system.

Headers and Accept parameters
: In the header of a request, the client sends they type of content it is able to receive. This is the `Accept` field.
MIME types (Multipurpose Internet Mail Extensions) types and subtypes

-   `text/html`
-   `text/css`
-   `text/plain`
    other commonly used types and subtypes
-   `image` - `image/png`, `image/jpeg`, `image/gif`
-   `audio` - `audio/wav`, `audio/mpeg`
-   `video` - `video/mp4`, `video/ogg`
-   `application` - `application/json`, `application/pdf`, `application/xml`, `application/octet-stream`

example:

```
GET /articles/23
Accept: text/html, application/xhtml
```

Paths
: the path to the resource that the operation should be performed on. Conventionaly, the first part of the path should be the plural form of the resource. Example:
`fashionboutique.com/customers/223/orders/12`

Sending Responses
: Must include a `content-type` in the header of the response. This header alerts the client to hte type of data it is sending in the response body. These are MIME types just like in the `accept` field. Example:

```
GET /articles/23
Accept: text/html, application/xhtml
```

returns

```
HTTP/1.1 200 (OK)
Content-Type: text/html
```

Resource archetypes
: Four categories - document, collection, store, and controller

-   Document - singular concept akin to an object instance or database record. A single resource inside a resource collectioin
-   Collection - server-managed directory of resources
-   Store - client-managed resource repository. Lets and API client put resources in, take them out, and decide when to delete
-   Controller - models a procedural concept. Executable functions; inputs and outputs.
