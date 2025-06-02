import AppBuilder from "@appbuilder/react";
import { useEffect } from "react";

const useCustomize = () => {
  useEffect(() => {
    AppBuilder.customize({
      components: {
        videoCall: {},
      },
    });
  }, []);

  return <div>useCustomize</div>;
};

export default useCustomize;
