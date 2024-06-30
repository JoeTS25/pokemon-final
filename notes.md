Home Notes
- useState to set state for the pokemon, the current page, next page, and previous page (along with a loading state just in case)
- useEffect to set up how the pages work. The API comes with the request to use next and previous pages
- I had to remove React strict mode because my data kept multiplying randomly and this was the solution I found online
- I had to make sure I was mapping every pokemon's API URL to be able to access all their data
- I made a page component to work the next and previous buttons