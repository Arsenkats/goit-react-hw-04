import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div>
      <button
        className={css.loadMoreBtn}
        onClick={() => {
          handleChangePage();
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
