## Notes 
### Done
-[x] Search input

-[x] Results table with sortable columns: Name, Owner, Stars and Created at,

-[x] Pagination,

-[x] Nice and clean interface, including loading and error states,

-[x] Caching the search results,

-[x] Being able to see the exact same results for a given URL with search params,

-[x] Separating business and visual code,

-[x] Testing your code (preferably Jest, Cypress),

-[x] Type interfaces,

-[x] Useful git branch history,

-[ ] Anything else you think might be useful here:

### To consider
-[ ] it would be quite simple to add server side rendering in this setup

-[ ] few more tests should be written to cover the business logic (either in Cypress or in React Testing Library)

-[ ] if the project were to be larger a state manager could be considered (redux, mobx, xstate)

-[ ] 2 libraries were added: react-query for caching, and react-table to support sorting, these libraries together weigh about 100kb, we should consider the sense of their use and do we really need them in our production app

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
