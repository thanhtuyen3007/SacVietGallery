import { Route, BrowserRouter as Router, Routes } from "react-router";
import { Home } from "./Pages/Home/Home";
import { DefaultLayout } from "./Layout/DefaultLayout/DefaultLayout";
const publicRouters = [{ path: "/", component: Home }];
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
