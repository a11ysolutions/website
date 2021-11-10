# A11ysolutions website
Source for the A11ysolutions website.

# Project organization
So far we only have the frontend of the website. To run the project follow the next steps. We assume you have `Node.js` and `yarn` installed in your local environment.
- Clone this repo. You will be cloning the `dev` branch.
- Run ` yarn` 
- After dependencies have been installed run ` yarn start `

## Branching
We have two important branches:
- `main`: here we have the last stable version of the website. This branch is only updated by merging pull-requests from dev.
- `dev`: the development version. This is the default branch and the first place where accepted contributions go to.

The name of your branch should follow the format: `<your identifier>/<label>/<short description>`. Let's explain this further:

- `your identifier`: can be your name or any nickname you want to be identified with. E.g. `john`, or `awesome-dev`

- `label`: we have multiple predefined labels you should use according with the kind of contribution you want to do:

    - `doc` for documentation related contributions

    - `fix` if you want to fix a bug

    - `feat` if you want to add any new feature. E.g. adding components, making a new page or method, etc

    - `ref` if you want to refactor some parts of the existing codebase
    
    - `style` if you want to change styles 

The `short description` explains what you will be doing. It should be written in Pascal case.

Examples of valid branch names are:

- `john/doc/AddUserManual`

- `awesome-dev/feat/AddNavbar`

#### Notes on commits

We also have commit messages conventions. Your commit message should respect the following format:

`<label><!(if it is a chain breaker)>: <brief explanation> <Optional body to explain your changes further> `

For the label just apply what we've explained before. The `!` sign only has to be included if your changes are incompatible with the previous version of the app. Usually, if this happens, it is good that you add the optional body with a detailed explanation of what has been broken and how to fix it. 

The brief explanation should complete the sentence *If you apply this commit it will....* The message header should be written in lowercase. Examples of valid commit messages are:

- `doc: add a user manual to documentation`

- `ref!: create some utility functions to reuse. You need to import the getOptions function from utils whenever you add a dropdown input`




