# Contributing
We welcome contributions to this project from the community.

## How to Contribute
To contribute to this project, please follow these steps:

- Fork this repository.
- Clone the forked repository to your local machine.
- Install the dependencies `npm run install`.
- Start your local server `npm run dev`.
- Create a new branch from the main branch for your changes.
- Create a new folder under `src/lib/[utility_name]` it as your add-on name.

### Function Folder

A function folder typically contains these 4 files:

> You can find the template under `src/lib/[utility_name]`

```bash
index.ts            # function source code itself
demo.vue            # documentation demo
index.md            # documentation
```

- Export the function with names in `src/lib/index.ts`.
  ```ts
  export { draggable } from './dragDiv/index';
  ```
- Create a pull request against the main branch of the original repository.

## Thanks
Thank you again for being interested in this project! You are awesome!
