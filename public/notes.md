By default, Next.js pre-renders every page.
This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
The difference is in when it generates the HTML for a page.

Static Generation is the pre-rendering method that generates the HTML at build time. The pre-rendered HTML is then reused on each request.
Server-side Rendering is the pre-rendering method that generates the HTML on each request.
Importantly, Next.js lets you choose which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

getStaticProps runs at build time in production, and…
Inside the function, you can fetch external data and send it as props to the page.

important Note: In development mode, getStaticProps runs on each request instead.

You might have noticed that each markdown file has a metadata section at the top containing title and date.
This is called YAML Front Matter, which can be parsed using a library called gray-matter.

Note: Next.js polyfills fetch() on both the client and server. You don't need to import it.

getStaticProps only runs on the server-side. It will never run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

getStaticProps meant to be run at build time, you won’t be able to use data that’s only available during request time, such as query parameters or HTTP headers.
getSTaticProps can only be exported from a page. You can’t export it from non-page files.

One of the reasons for this restriction is that React needs to have all the required data before the page is rendered

//
If you need to fetch data at request time you can try Server-side Rendering:

each page path depends on external data. Next.js allows you to statically generate pages with paths that depend on external data. This enables dynamic URLs in Next.js.

First, we’ll create a page called [id].js under pages/posts. Pages that begin with [ and end with ] are dynamic routes in Next.js.

The paths key determines which paths will be pre-rendered.

Error: Additional keys were returned from `getStaticPaths` in page "/[id]". URL Parameters intended for this dynamic route must be nested under the `params` key, i.e.:

    return { params: { id: ... } }

Keys that need to be moved: myparams.
// params is a REQUIRED key!! don't name it something else

Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. For example:

API routes provide a straightforward solution to build your API with Next.js.

Any file inside the folder pages/api is mapped to /api/\* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

They can be deployed as Serverless Functions (also known as Lambdas).

// import note
Do Not Fetch an API Route from getStaticProps or getStaticPaths
Here’s why: getStaticProps and getStaticPaths runs only on the server-side. It will never be run on the client-side. It won’t even be included in the JS bundle for the browser. That means you can write code such as direct database queries without them being sent to browsers.

A good use case for API Routes is handling form input. For example, you can create a form on your page and have it send a POST request to your API Route. You can then write code to directly save it to your database. The API Route code will not be part of your client bundle, so you can safely write server-side code.
