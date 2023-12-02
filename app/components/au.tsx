import { IconButton } from "./button";
import styles from "./au.scss";
import { useEffect, useRef } from "react";
function goBaidu() {
  window.location.href = '#/chat';
}
export function AuPage() {
  const webpageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function loadWebpage() {
      if (webpageRef.current !== null) {
        const iframe = document.createElement("iframe");
        iframe.src = "https://zfb.yjie.fun/zl/";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        webpageRef.current.appendChild(iframe);

        // 隐藏侧边滚动条
        document.body.style.overflow = "hidden";
      }
    }

    loadWebpage();
  }, []);

  return (
    <div className={styles["auth-page"]} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "white" }}>
      <div ref={webpageRef} style={{ width: "100%", height: "100%", overflow: "hidden" }}></div>
      <button style={{ marginTop: "20px", marginBottom: "20px", width: "100px", height: "40px", borderRadius: "20px", backgroundColor: "#007AFF", color: "white", borderWidth: "1px", borderColor: "#007AFF" }} onClick={goBaidu}>返回聊天</button>
    </div>
  );
}
