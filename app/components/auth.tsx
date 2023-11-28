import styles from "./auth.module.scss";
import { IconButton } from "./button";

import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import { useAccessStore } from "../store";
import Locale from "../locales";

import BotIcon from "../icons/bot.svg";
import { useEffect } from "react";
import { getClientConfig } from "../config/client";

export function AuthPage() {
  const navigate = useNavigate();
  const accessStore = useAccessStore();

  const goHome = () => navigate(Path.Home);
  const goChat = () => navigate(Path.Chat);
  const resetAccessCode = () => {
    accessStore.update((access) => {
      access.token = "";
      access.accessCode = "";
    });
  }; // Reset access code to empty string
  function goBaidu() {
    window.location.href = 'http://bj.yjie.fun/gm/';
  }
  useEffect(() => {
    if (getClientConfig()?.isApp) {
      navigate(Path.Settings);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["auth-page"]}>
      <div className={`no-dark ${styles["auth-logo"]}`}>
        <BotIcon />
      </div>

      <div className={styles["auth-title"]}>{Locale.Auth.Title}</div>
      
      {!accessStore.hideUserApiKey ? (
        <>
          <div className={styles["auth-tips"]}>{Locale.Auth.SubTips}</div>
          <input
            className={styles["auth-input"]}
            type="text"
            placeholder={Locale.Settings.Token.Placeholder}
            value={accessStore.token}
            onChange={(e) => {
              accessStore.update(
                (access) => (access.token = e.currentTarget.value),
              );
            }}
          />
        </>
      ) : null}
      
      <div className={styles["auth-actions"]}>
       <IconButton
         text="获取授权码"
         type="primary"
         onClick={goBaidu}
        />
       </div><br></br>
      <div className={styles["auth-actions"]}>
        <IconButton
          text="立即授权"
          type="primary"
          onClick={goChat}
        />
        <IconButton
          text={Locale.Auth.Later}
          onClick={() => {
            resetAccessCode();
            goHome();
          }}
        />
      </div>
    </div>
  );
}
