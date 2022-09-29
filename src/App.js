import BookForm from "./components/BookForm";
import BookLIst from "./components/BookLIst";
import Navbar from "./components/Navbar";
import BookContextProvider from "./contexts/BookContexts";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookLIst />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
