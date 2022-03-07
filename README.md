# campus-app-backend

Campus App Backend (NodeJs, ExpressJs, MySQL, Prisma)

## VS Code Extensions

| Extension                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ENV                       | Adds formatting and syntax highlighting support for env files (.env) to Visual Studio Code                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Prettier - Code formatter | Adds support for Prettier to format code in VSCode. Make sure prettier is selected as the formatter and auto-format is enabled. To enable auto-format, go to Settings (<pre>ctrl + ,</pre> <pre>Text Editor > Formatting</pre> and enable <pre>Format on Save</pre>. <br> To enable Prettier as the formatter, search for **Format Document** in the command pallette <pre>CTRL + SHIFT + P </pre> . You may then be prompted to choose which format to use. To do so, click the Configure button. Then choose Prettier - Code Formatter. |
| Prisma                    | Adds syntax highlighting, linting, code completion, formatting, jump-to-definition and more for Prisma Schema files.                                                                                                                                                                                                                                                                                                                                                                                                                      |

## Initialize Prisma

These steps are already done and committed in the repository.

| Command                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <pre>npm i prisma --save-dev</pre>            | Install Prisma                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <pre>npx prisma init</pre>                    | Creates a "prisma" folder with a prisma schema file (schema.prisma). It also creates an .env file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <pre>npx prisma migrate dev --name init</pre> | This command does two things: <br>1. It creates a migration file (migration.js) and <br> 2. It creates a database (database.sqlite) <br> <br> Also, generate is called under the hood by default, after running prisma migrate dev. If the prisma-client-js generator is defined in your schema, this will check if @prisma/client is installed and install it if it's missing. <br> <br> After this, the database tables should be created. <br> <pre>--init name </pre> is used to name the migration . It will be appended tot he directory in the migrations folder prepended with a date/time stamp. <pre>20220228043350_init </pre> |
| <pre>npm install @prisma/client</pre>         | Install Prisma Client. Whenever you make changes to your Prisma schema in the future, you manually need to invoke <pre>prisma generate</pre> in order to accommodate the changes in your Prisma Client API.                                                                                                                                                                                                                                                                                                                                                                                                                               |

## Forward Logs

Logs in digital ocean's app platform can be viewed in the DO dashboard. They can also be forwarded to log management providers. Currently, we use **Logtail** as the log management provider.

Setting up the log management provider is as simple as:

1. Generate token in the log management provider.
2. provide the token in DO's app platform.

[How to forward logs in App Platform](https://docs.digitalocean.com/products/app-platform/how-to/forward-logs/)

For **Logtail** the source type should be set up as **RSyslog** when generating the token. This is the token that should be used in the DO app platform.
