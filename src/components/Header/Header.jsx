import css from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className={css.headerStyles}>
      <form className={css.formStyle}>
        <input
          type='text'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
          className={css.input}
        />
        <button type='submit' className={css.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default Header;
