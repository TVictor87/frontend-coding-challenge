import { APP_NAME, APP_VERSION } from "./config";
import { useEffect, useState } from "react";

import { BookStoreData } from "./api/types";
import { apiGetBookStores } from "./api/apiGetBookStores";
import BookStore from "./components/BookStore";

import "./App.css";

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
        <BookStore key={store.id} store={store} />
      ))}
    </div>
  );
};

export default App;
