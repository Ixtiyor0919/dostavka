import React from "react";
import { motion } from "framer-motion";
import { Route, Redirect } from "react-router-dom";

import useToken from "../Hooks/UseToken";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useToken();

  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };
  return (
    // Show the component only when the admin is logged in
    // Otherwise, redirect the admin to /signin page

    <Route
      {...rest}
      render={(props) =>
        token ? (
          <motion.div
            transition={config}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            <Component {...props} />
          </motion.div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;