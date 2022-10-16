import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './Home/About/About';
import Main from './layout/Main';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
        },
        {
          path: '/user/:friendId',
          element: <FriendDetails></FriendDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        }
      ]
    },
    {
      path: "*",
      element: <div>The route is not found</div>
    },


  ])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
