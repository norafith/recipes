import "./globals.css";
import classes from "./App.module.css";
import HeaderContainer from "./Header/HeaderContainer";
import RecipesContainer from "./Recipes/RecipesContainer";

function App() {
  return (
    <div className={classes.appWrapper}>
      <HeaderContainer />
      <main className={classes.content}>
        <RecipesContainer />
      </main>
    </div>
  );
}

export default App;
