import classes from "./Header.module.css";

interface HeaderProps {
  searchQuery: string;
  handleSearchValChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Type your dish name"
          value={props.searchQuery}
          onChange={props.handleSearchValChange}
        />
      </div>
    </header>
  );
};

export default Header;
