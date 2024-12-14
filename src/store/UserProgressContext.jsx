import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", //cart and checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");
  //function declation for progress context provider;
  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };
  const showCheckout = () => {
    setUserProgress("checkout");
  };
  const hideCheckout = () => {
    setUserProgress("");
  };

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout
  }

  return (
    <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
  );
};

export default UserProgressContext;
