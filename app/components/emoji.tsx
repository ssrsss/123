import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  return `https://cdn.staticfile.org/emoji-datasource-apple/14.0.0/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <EmojiAvatar avatar="http://tc.lzlspyxgs.asia/%E5%BE%AE%E4%BF%A1%20%281%29.png" size={35} />
        ) : (
          <EmojiAvatar avatar="http://tc.lzlspyxgs.asia/%E5%BE%AE%E4%BF%A1%20%281%29.png" size={35} />
        )}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <img src={props.avatar} className="user-avatar" />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <img src={props.avatar} style={{ width: props.size, height: props.size }} />
  );
}
