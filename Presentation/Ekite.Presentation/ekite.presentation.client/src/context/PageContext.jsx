import { createContext, useEffect, useState } from "react";

const PageContext = createContext();

const PageProvider = ({children}) => {
  const storedPrevPage = localStorage.getItem("prevPage");
  const initialPrevPage = storedPrevPage ? storedPrevPage : "/home";
  const [prevPage, setPrevPage] = useState(initialPrevPage);

  const handlePrevPage = (page) => {
    setPrevPage(page);
  };

  useEffect(() => {
    localStorage.setItem("prevPage", prevPage);
  }, [prevPage]);

  return (
    <PageContext.Provider value={{ handlePrevPage, prevPage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
