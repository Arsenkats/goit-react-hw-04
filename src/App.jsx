import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Zaglushka from "./components/Zaglushka/Zaglushka";

const App = () => {
  const [images, setImages] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      if (!searchValue) return;
      try {
        setIsSearching(true);
        const data = await fetchImages(searchValue, page);
        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
      } catch (error) {
        toast.error(
          "Error fetching data: " + (error.message || "Unknown error")
        );
      } finally {
        setIsSearching(false);
      }
    };

    handleSearch();
  }, [searchValue, page]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      {isSearching && <Loader />}
      {!isSearching && images.length === 0 && <Zaglushka />}
      <ImageGallery images={images} />
      <ToastContainer />
      {images.length > 0 && <LoadMoreBtn handleChangePage={handleChangePage} />}
    </>
  );
};

export default App;
