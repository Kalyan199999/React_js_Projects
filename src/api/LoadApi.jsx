import PostApi from "./PostApi"
import SinglePost from "./SinglePost";

import { BrowserRouter,Routes ,Route } from "react-router-dom";



function LoadApi() {
  return (
    <>
      <BrowserRouter>
          
        <Routes>

          <Route path="/" element={<PostApi />} />
          <Route path="/post/:id" element={<SinglePost />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default LoadApi
