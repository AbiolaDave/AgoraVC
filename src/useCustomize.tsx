import AppBuilder from "@appbuilder/react";
import { useEffect } from "react";

const BottomBaroverride = (props: any) => {
  return (
    <>
      {props.children}
      <button>Party! 🎉</button>
    </>
  );
};

const useCustomize = () => {
  useEffect(() => {
    AppBuilder.customize({
      components: {
        videoCall: {
          // bottomToolBar: BottomBaroverride,
        },
      },
    });
  }, []);

  return <div>useCustomize</div>;
};

export default useCustomize;
