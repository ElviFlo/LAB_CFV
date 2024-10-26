import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components";
import { Dashboard, PageNotFound, Info, Tablas, Graficas } from "./screens";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
import { GlobalStyles } from "./styles/global/GlobalStyles";

const routes = [
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },

      {
         path: '/info',
         element: <Info /> 
      },

      { path: '/tablas',
        element: <Tablas />
      },

      { path: '/graficas',
        element: <Graficas />
      },
      
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;