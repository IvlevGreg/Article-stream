## About:

Dynamic web platform tailored for article enthusiasts. Whether you're an avid reader or an aspiring writer, Expressely
caters to all.

### Features:

- **📑 Read and Rate:** Browse through a wide array of articles. Dive deep into the content and rate them based on your
  insights.

- **✍️ Publish and Comment:** Got something to share? Craft your article and publish it to our platform. Engage with
  other users through meaningful comments.

- **🔍 Customized Sorting:** Find articles based on different sorting options, ensuring you always read what you love.

- **👤 User:** Enjoy reading, rating, commenting, and even publishing articles. Stay updated with your article viewing
  history and customize your feed based on your profile preferences.

- 👨**‍✈️ Admin:** Possess all privileges of a user with added responsibilities. Approve articles published by users,
  elevate privileges by granting admin rights, and have an eagle's eye view on the platform's analytics concerning
  users, articles, and views

### Summary:

1. **Feature-Sliced Design:** Organized codebase following the feature-sliced design pattern for maintainability and
   scalability.
2. **React + TypeScript:** Developed using functional components and hooks with TypeScript for type safety.
3. **State Management**: Redux Toolkit, Redux Thunk and RTK Query for efficient data fetching and caching.
4. **Forms and Validation:** Integrated with React Hook Form.
5. **Lazy Loading:** Implemented lazy loading for pages, modals, and reducers for optimized performance and quicker
   initial load times.
6. **Theming and Localization:** Includes multiple color themes and internalization support using i18n.
7. **Virtualization:** Implemented virtualization of articles list using Intersection Observer for efficient rendering.
8. **Webpack:** Configured for optimizing, bundling, and managing assets and dependencies.
9. **Storybook:** Utilized for building UI components in isolation, documenting selected shared components
10. **Testing:** Utilized Jest with React Testing Library (RTL) for unit testing, and Cypress for end-to-end testing.
11. **CI/CD:** Automation with Continuous Integration/Continuous Deployment pipeline for every commit.

---

## Launch of the project

- `npm install` - install dependencies
- `npm run start:dev:server`  - start the server in dev mode
- `npm run start`  - start frontend project in dev mode

---

## Scripts

### Start and build

* `npm run start` - run frontend with Webpack on http://localhost:3003/
* `npm run start:dev:server` - run backend on http://localhost:8000/
* `npm run build:dev` - build in dev mode
* `npm run build:prod` - build in prod mode

### Linting

* `npm run lint:ts` - check TS files with ESLint
* `npm run lint:ts:fix` - fix TS files with ESLint
* `npm run lint:scss` - check scss files with Stylelint
* `npm run lint:scss:fix` - fix scss files with Stylelint

### Storybook

* `npm run start:storybook` - run storybook on http://localhost:6006/
* `npm run storybook:build` - create storybook build

### Testing

* `npm run test:unit` - run unit tests with Jest
* `npm run test:ui` - run screenshot tests with Loki (storybook should be started)

---

## Project architecture

Project was written depends on Feature Sliced Design methodology.

Docs link - [Features Sliced Design](https://feature-sliced.design/ru/docs/get-started/overview)

---

## Work with translation

Project using `i18next` library for translations. The translation files are stored
in [public/locales](./public/locales/).
A convenient file system of translations is provided, which makes it easy to introduce a new language: create a
directory with the desired language, edit the [i18next configuration](./src/shared/config/i18n/i18n.ts) a bit and create
translations manually using the appropriate keys.

For comfortable working with translations strongly recommend to install vscode/web-storm extension. For vscode link
provided: [click me](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)

i18next docs - [https://react.i18next.com/latest/using-with-hooks](https://react.i18next.com/latest/using-with-hooks)

---

## Testing

Project has 3 types of tests:

1) Unit testing uses jest with the usual mocks of data and libraries
2) Integration testing with React Testing Library in
   jest-dom, [testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) is used, and for
   isolated components
3) Regression screenshot storybook testing. I use  [Chromatic](https://www.chromatic.com/) solution

---

## CI pipeline and pre-commit hooks

Config for GitHub Actions in `.github/workflows`. CI used to run linters, tests, build
project and storybook, upload unit & screenshot reports to GitHub Pages.

In precommit hooks we check the project with linters, config in /.husky

---

## Working with data

Data interaction is handled by @reduxjs/toolkit. Reusable entities can be normalized using EntityAdapter, which allows
to obtain O(n) data access complexity.

Requests to the backend are sent using both [axios](https://axios-http.com/en/docs/intro)
and [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)

JSON-server was used for backend in the application, as well as the basic data in the form of filling articles,
comments, notifications, users and profiles were filled manually, due to the absence of backend. Can write a
full-fledged backend in NestJS, for example, together with the editor of articles with the help of some library.

For async reducers loading, used [DynamicModuleWrapper](/src/shared/lib/components/DynamicModuleWrapper.tsx)

It allows asynchronous loading of reducers, thus getting rid of them in the main bundle

---

## Project configuration

For development project has 2 configs:

1. Webpack config - [./config/build](/config/build/), [webpack.config.ts](/webpack.config.ts)

The project configuration is stored in [/config](/config/)

- */config/babel* - babel configuration
- */config/build* - Webpack configuration. Resolvers, plugins, DevServer, Loaders are stored here
- */config/jest* - jest environment config
- */config/storybook* - storybook configuration

---

## Storybook

Project using storybook to describe components views.
The storybook-addon-mock is used for mock requests from backend.

The storybook file is in the same directory as the component it describes and has pattern like **.stories.tsx**

The storybook is started with the following script - `npm run storybook`

More about storybook - [Storybook](https://storybook.js.org/docs/react/get-started/install/)

Additional decorators to make the storybook work with the libraries used in the project are
written [here.](/src/shared/config/storybook/)
