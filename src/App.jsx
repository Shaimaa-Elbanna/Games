import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Components/RootLayout/RootLayout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Browser from './Components/Platforms/Browser/Browser';
import Pc from './Components/Platforms/Pc/Pc';
import ReleaseDate from './Components/SortBy/ReleaseDate/ReleaseDate';
import Popularity from './Components/SortBy/Popularity/Popularity';
import Alphabetical from './Components/SortBy/Alphabetical/Alphabetical';
import Relevance from './Components/SortBy/Relevance/Relevance';
import Racing from './Components/Category/Racing/Racing';
import Sports from './Components/Category/Sports/Sports';
import Social from './Components/Category/Social/Social';
import Shooter from './Components/Category/Shooter/Shooter';
import OpenWorld from './Components/Category/OpenWorld/OpenWorld';
import Fantasy from './Components/Category/Fantasy/Fantasy';
import ActionRBG from './Components/Category/ActionRBG/ActionRBG';
import Action from './Components/Category/Action/Action';
import Fight from './Components/Category/Fight/Fight';
import Battle from './Components/Category/Battle/Battle';
import All from './Components/All/All';
import Zombie from './Components/Category/Zombie/Zombie';
import GameDetails from './Components/GameDetails/GameDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import InverseProtectedRoute from './Components/InverseProtectedRoute/InverseProtectedRoute';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';



let routers = createBrowserRouter([
  {path:'/', element: <RootLayout/>, children:[
    {path:'login', element: <Login/>},
    {path:'register', element: <Register/>},
    {index:"/", element:<Home/>},
    {index:"home", element:<Home/>},
    {path:'all', element:<All/>},
    {path:'Platforms/browser', element:<Browser/>},
    {path:'Platforms/pc', element:<Pc/>},
    {path:'sort-by/release-date', element:<ReleaseDate/>},
    {path:'sort-by/popularity', element:<Popularity/>},
    {path:'sort-by/alphbetical', element:<Alphabetical/>},
    {path:'sort-by/relevance', element:<Relevance/>},
    {path:'Category/racing', element:<Racing/>},
    {path:'Category/sports', element:<Sports/>},
    {path:'Category/social', element:<Social/>},
    {path:'Category/shooter', element:<Shooter/>},
    {path:'Category/openworld', element:<OpenWorld/>},
    {path:'Category/zombie', element:<Zombie/>},
    {path:'Category/fantasy', element:<Fantasy/>},
    {path:'Category/actionrbg', element:<ActionRBG/>},
    {path:'Category/action', element:<Action/>},
    {path:'Category/fight', element:<Fight/>},
    {path:'Category/battle', element:<Battle/>},
    {path:'gamedetails/:id', element:<GameDetails/>},
    {path:'*', element: <ErrorPage/>}
    
  ]}
])
function App() {
  return <RouterProvider router={routers}/>
}

export default App;
