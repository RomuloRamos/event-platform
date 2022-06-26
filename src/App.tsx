import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import {client} from "./lib/apollo"; 

import {Event} from "./pages/Event";
function App() {


  return (
    <Event></Event>
  )
}

export default App
