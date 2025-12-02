import { Route, BrowserRouter as Router, Routes } from "react-router";
import { DefaultLayout } from "~/Layout/DefaultLayout/DefaultLayout";
import { Home } from "~/Pages/Home/Home";
import { Collections } from "~/Pages/Collections/Collections";
import { Collection } from "~/Pages/Collection/Collection";
const publicRouters = [
  { path: "*", component: Home },
  { path: "/collections", component: Collections },
  { path: "/collection", component: Collection },
];
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
