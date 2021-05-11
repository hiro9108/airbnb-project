# Use this command right after cloning this server repository.

```sh
npm ci
```

It's means "clean install".

> THis command is safer than "npm install" command regarding the dependency of npm packages.

### After installing the npm modules, you can access the GraphQL GUI Tool for demonstration.

```sh
http://localhost:5000/graphql
```

> Sample Query (Get _All_ data)

```sh
query{
  books{
    id
    name
    authorId
  }
}
```

> Sample Query (Get _id_ and _name_ data)

```sh
query{
  books{
    id
    name
  }
}
```

> Sample Query (Get _id_ and _authorId_ data)

```sh
query{
  books{
    id
    authorId
  }
}
```
