import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Component/Head";
import Body from "./Component/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
