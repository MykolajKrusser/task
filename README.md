# Recruitment task

An application displaying dynamic tabular datasets using React.js and fetching data using the Github public api.

<a href='https://github-reposearcher.firebaseapp.com'>SEE LIVE!</a>

## The task

Develop an application displaying dynamic tabular datasets using React.js and fetching data using the Github public api.

The app should render an `<input />` that is used to [search repositories](https://developer.github.com/v3/search/). Consider:

* On input change, make an API request to the Github API and get the result data
* Do not make an API request if the results are already stored
* Do not fire requests as long as the user is typing. Typically you should throttle requests so that when the user types quickly, we fire one request with the latest input value instead of many

The table itself should be of the following structure:

| ID        | Repo Title         | Owner        | Stars | Created at |
| ---------:| ------------------ | ------------ | ----: | :--------: |
| 436546    | react-native       | Progarers    |   77  | 2016-09-24 |

The resulting table should show maximum 5 rows at once. 

Apart from that, please implement the following: (locally, not using API queries):
* Pagination
* Ability to control number of rows rendered (5/10/15/20)
* Asc/desc sorting by every column
* A persistence mechanism using e.g. localStorage is required (so it remembers last search and settings when we go back to the page)

And finally:

* The row of the currently authenticated user (if any) should be highlighed. An user should be able to log in using a "Log in with GitHub" button
