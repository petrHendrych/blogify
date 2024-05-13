# Blogify

Simple blog mockup showing homepage with list of posts and post detail. It is possible to add
comments to the post and reply to the comments.

Blog posts are loaded from [JSON placeholder](https://jsonplaceholder.typicode.com/) and comments are written only
locally and preserved in `localStorage` so they are loaded even after restarting application.

Created three simple storybook stories to showcase basic custom components.

**List of libraries and packages:**

- React v18 (with TypeScript)
- React Bootstrap, sass (for UI components and styling)
- Formik and yup (for working with forms)
- react-i18next (for translations)
- Storybook
- esLint/Prettier and Husky (for code formatting)

### Installation
Prerequisites:

- [Bun](https://bun.sh/) - used as JavaScript runtime
- [Node](https://nodejs.org/en) - version >= 20.11.1

Before first start of the application run install command:

```shell
  bun i
```

To start development server run command:
```shell
  bun run dev
```
 
### Running Storybook
To start storybook run command:
```shell
  bun run storybook
```