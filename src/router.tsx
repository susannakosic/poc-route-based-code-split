import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
//import OtherPage from "./pages/Other";
import { NotFound } from "./pages/NotFound";

export const Router = () => {
  const OtherPage = React.lazy(() => import("./pages/Other"));
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="/other" element={<OtherPage />} /> */}
      <Route
        path="/other"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <OtherPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
