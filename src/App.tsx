import { useEffect, useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

import { apiGetBookStores } from "./api/apiGetBookStores";
import { BookStoreData } from "./api/types";
import BookStore from "./components/BookStore";
import "./App.css";
import { APP_NAME, APP_VERSION } from "./config";

const App: React.FC = () => {
  const [bookstores, setBookstores] = useState<BookStoreData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiGetBookStores();
      setBookstores(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>
        {APP_NAME} - {APP_VERSION}
      </h1>
      {bookstores.map((store: BookStoreData) => (
        <BookStore store={store} />
      ))}
    </div>
  );
};

export default App;
