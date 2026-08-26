# Coffee Project

Better Coffee is a small, client-side coffee browser. It displays a list of
coffees, filters the list by roast and name, and lets users add coffees during
the current browser session.

## Features

- Displays each coffee with its name and roast level.
- Sorts coffees by their internal id when the page loads.
- Filters by light, medium, dark, or all roast levels.
- Searches coffee names as the user types, without case sensitivity.
- Adds a new coffee after validating its name and roast.
- Uses an accessible live region so changes to the coffee list can be announced.
- Applies a responsive layout with Bootstrap and custom CSS.

## Run Locally

## Testing checklist

Run the app with Live Server and verify:

1. The page shows the coffee cards and a result count.
1. Typing a search term updates the cards immediately.
1. Selecting a roast filters the cards.
1. Clicking **Reset filters** shows every coffee again.
1. Adding a unique coffee displays it and keeps it after a refresh.
1. Adding an existing name shows a validation message.
1. Searching for `xyz` shows **No coffees found.**
1. Entering `<img src=x onerror=alert('test')>` displays text and does not show an alert.
   Try the deployed application: [Better Coffee](https://chininchu.github.io/coffee-project/)

No build step or dependencies are required. Open `index.html` in a browser, or
serve the project directory with any local static file server:

```sh
python3 -m http.server
```

Then visit `http://localhost:8000`.

## Project Structure

- `index.html` contains the page structure and forms.
- `main.js` stores the coffee data and controls rendering, filtering, and adding.
- `style.css` contains the custom page styling and animated background.
- `img/` contains the sustainability image used on the page.

## Data Persistence

New coffees are saved in the browser with `localStorage`, so they remain after
the page is refreshed. Clearing the browser's site data removes saved coffees.
