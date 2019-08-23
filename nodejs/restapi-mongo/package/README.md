- monogod
- mongo

- create a directory data/db under c:/


### Test API using Postman

- Post a Note
  ```
  http://localhost:3000/notes
  {title: "some title", content:"some content"}
  ```

- Retrive all notes
  ```
  http://localhost:3000/notes
  ```

- Retrive a single note
  ```
  http://localhost:3000/note/<noteId>
  ```

- Update a single note
  ```
  http://localhost:3000/note/<noteId>
  ```

- Delete a single note
  ```
  http://localhost:3000/note/<noteId>
  ```
