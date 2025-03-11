import routes from "../constants/routes";
import AuthGuard from "../Guards/AuthGuard";
import Home from "../pages/Home/Home";
import MoviesList from "../pages/MoviesList/MoviesList";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import SignOut from "../components/SignOut/SIgnOut";

const appRoutes = [
  { path: routes.home, component: Home, Guard: AuthGuard },
  { path: routes.moviesList, component: MoviesList, Guard: AuthGuard },
  { path: routes.signIn, component: SignIn },
  { path: routes.signUp, component: SignUp },
  { path: routes.signOut, component: SignOut },
];

export default appRoutes;
