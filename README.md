# Personal Portfolio Website in React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img width="1266" alt="Screen Shot 2022-06-19 at 2 18 18 PM" src="https://user-images.githubusercontent.com/50160672/174933373-1ba6cadf-1c9a-48c3-aa58-984d0bd62d82.png">

Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css

In the /personal-portfolio, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run server`

Starts the Express backend on `http://localhost:5000`.

The backend connects to MongoDB Atlas and stores:

- Visitors (`/api/visitors`)
- Resume downloads (`/api/resume-downloads`)
- Newsletter subscribers (`/api/subscribers`)
- Contact form messages (`/api/contact` or `/contact`)
- Combined dashboard stats (`/api/stats`)

## Environment variables

Create a `.env` file in the project root:

```bash
PORT=5000
CLIENT_PORT=3000
MONGODB_URI=your-mongodb-connection-string
MONGODB_URI_FALLBACK=your-non-srv-mongodb-connection-string
MONGODB_DB_NAME=portfolio
MONGODB_DNS_SERVERS=
MONGODB_PREFER_FALLBACK=true
MONGODB_CONNECT_TIMEOUT_MS=15000
REACT_APP_API_BASE_URL=http://localhost:5000
```

Mongo connection order:

1. `MONGODB_URI_FALLBACK` when `MONGODB_PREFER_FALLBACK=true` (recommended if SRV DNS fails)
2. `MONGODB_URI` as secondary attempt

If you want SRV first, set `MONGODB_PREFER_FALLBACK=false`.

Notes:
- `PORT` is used by the Express backend (`npm run server`).
- `npm start` always serves the React app on `CLIENT_PORT` (default `3000`), so it does not conflict with backend `PORT`.
"# my-protofolio" 
