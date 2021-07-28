/* eslint-disable */
// @ts-nocheck
import dynamic from "next/dynamic";
import React, { useRef, useEffect } from "react";
// const SimpleMDE = dynamic(() => import("amazon-connect-streams"), {
//   ssr: false,
// });
// import "amazon-connect-streams";

const style = {
  minWidth: 64, // 数値は"64px"のように、pxとして扱われます
  lineHeight: "32px",
  borderRadius: 4,
  border: "none",
  padding: "0 16px",
  height: "500px",
  color: "#fff",
};
// declare var connect: any;

// let Connect;
// if (typeof window !== "undefined") {
//   Connect = dynamic(
//     async () => {
//       const module = await import("amazon-connect-streams");
//       return module;
//     },
//     {
//       ssr: false,
//       loading: () => null,
//     }
//   );
// }

function App() {
  const El = useRef<HTMLDivElement>(null);
  let Connect;
  if (typeof window !== "undefined") {
    Connect = dynamic(
      async () => {
        await import("amazon-connect-streams").then(() =>
          connect.core.initCCP(El.current, {
            ccpUrl: "https://xxx-xxx-connect.awsapps.com/connect/ccp-v2/",
            loginPopup: true, // optional, defaults to `true`
            region: "ap-northeast-1", // REQUIRED for `CHAT`, optional otherwise
            softphone: {
              // optional
              allowFramedSoftphone: true, // optional
              disableRingtone: false, // optional    });
            },
          })
        );
      },
      {
        ssr: false,
        loading: () => null,
      }
    );
  }

  useEffect(() => {
    // const test = dynamic(() => import("amazon-connect-streams"), {
    //   ssr: false,
    // });
    // console.log("test", test);
    // dynamic(() =>
    //   import("amazon-connect-streams").then((demo) => console.log("demo", demo))
    // );
    // Connect.core.initCCP(El.current, {
    //   ccpUrl: "https://xxx-xxx-connect.awsapps.com/connect/ccp-v2/",
    //   loginPopup: true, // optional, defaults to `true`
    //   region: "ap-northeast-1", // REQUIRED for `CHAT`, optional otherwise
    //   softphone: {
    //     // optional
    //     allowFramedSoftphone: true, // optional
    //     disableRingtone: false, // optional    });
    //   },
    // });
  }, []);

  return (
    <main>
      <div className="ccp">
        {/* ccp */}
        {/* {Connect ? <div style={style} ref={El} /> : null} */}
        <div style={style} ref={El} />
        {Connect ? <Connect /> : null}
      </div>
    </main>
  );
}

export default App;
