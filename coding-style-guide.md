# Coding Style Guide

To get a general Rule of thumb for this project, we will need to declare a set of rules we go by. Please reference this guide to get a consistent coding style going.

## Naming files

**React components**

- Create a folder with the Name of the component
- In this folder lives a index.js with the components code
- These live in the folder `/components`
- React components end with `.jsx`, not `.js`. This is better for DX.

**Styled Components**

- Create a file with the prefix `Styled`.
- Leave out the suffix `.styled.`
- These live in the folder `/design-system` in root.
- Don't create folders for styled components.

**Pages**

- Reference the "Naming Conventions" Part
- What would make the most sense for the user to see? URLs are seen and shared by users!
- For every page (not `home`) we create a folder with an index.js in it

## Declaring Components

```jsx
function NAME() {
  // Your code
}

export default NAME;
```

## Naming Convention

1. **Use descriptive Names:** Choose names that accurately describe the purpose or functionality of the component.
2. **Use PascalCase**
3. **Avoid confusion:** Make sure everyone understands what your component is doing.
4. **Prefix generic components:** If you are using a component throughout the app, prefix it with App e.g. AppButton, AppList (but not for global components like Headers and Footers)
5. **No DOM Element Names:** Avoid using names that include for example `div`, `span`, `input`
6. **Functionality over Implementation:** Base the name of the component based on what it does, not how its implemented. If its a Dropdown Menu, name it DropdownMenu instead of DropdownHandler
7. **Use Consistency**
8. **Keep it simple, stupid.**

## Surviving with Styled-Components 💅

Since our App is getting bigger and bigger it is hard to follow which styled Component does what. Since then we will put all our Styles into the folder `/design-system`.

1. Don't create folders for styled components. Assets belong to `/assets` in root.
2. Try to create a generic styling, rather than a very specific one, so we can reuse styles
3. They are no Styles in the `/components`folder. These belong to `/design-system`. The `/components` folder belongs exclusively to React Components.
4. For our naming convention reference the "Naming Conventions" part.
5. Styled Components files always start with `Styled` and dont end with `.styled.`
6. No styling is living within React Components! This ensures clean code and seperation of concerns.
7. Everyone needs to understand at a first glance, what kind of component or styled-component you created.

## Git Rules - Commits, Branches, PRs

1. Direct Commits in Main are a NO-GO! (Unless you are working on README.md)
2. Always use imperative and start with a verb and first letter uppercase.

```bash
git commit -m "Add foobar"
```

3. Main stays untouched. Branches are merged into main, not the other way around.
4. Commits are made if you have a final decision about you code in that moment.
5. Create commits by features and create one for every feature you code.
6. Name your branches like this: `feat/US$`. If you split from these branches you name it like this: `feat/US$-exampleFeature`
7. Create more branches, rather than less. Create a branch for every User Story you are implementing. If the user story is very big, split into multiple branches.
8. One finished user story can be seen in the final branch. Don't forget to merge the features into this one final branch.
9. When creating Pull Requests, start with `**What's changed:**` and then list the features the Pull Request is adding/removing/changing.

## Other rules we live by

- Clean code is more important than pushing features fast/dirty.
- No repeating code! If it takes to refactor a little bit, we refactor a little bit.
- Try to keep a file's code as small as possible and try to split your code to multiple files if possible/needed
- Be always nice and respectful!
- If you're feeling overwhelmed/stressed/burnedout/irritated, go take a break.
