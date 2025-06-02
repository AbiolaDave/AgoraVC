import AppBuilder from "@appbuilder/react";
import "./App.css";
import useCustomize from "./useCustomize";

function App() {
  useCustomize();
  return (
    <>
      <div className="agora">
        <AppBuilder.View />
      </div>
    </>
  );
}

export default App;
