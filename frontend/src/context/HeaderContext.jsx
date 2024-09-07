import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const useHeader = () => useContext(HeaderContext);

const HeaderProvider = ({ children }) => {
  const [headerContent, setHeaderContent] = useState(null); // Can hold JSX content

  return (
    <HeaderContext.Provider value={{ headerContent, setHeaderContent }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
