export const OWNER = "Yidadaa";
export const REPO = "天工智能AI";
export const REPO_URL = `http://12322.yjie.fun/`;
export const GO_URL = `http://bj.yjie.fun/zt/`;
export const ISSUE_URL = `http://12322.yjie.fun/`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `http://12322.yjie.fun/`;
export const FETCH_TAG_URL = `http://12322.yjie.fun/`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_CORS_HOST = "https://ab.nextweb.fun";
export const DEFAULT_API_HOST = `${DEFAULT_CORS_HOST}/api/proxy`;
export const OPENAI_BASE_URL = "https://api.openai.com";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Au = "/au",
}

export enum ApiPath {
  Cors = "/api/cors",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Plugins = "plugins.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Plugin = "plugin-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
你是一个试用版的天工智能AI助手。回答需要具有逻辑性。回答简单不啰嗦，直击重点，并拥有一种倾向于中国人说话方式的语言风格,幽默风格，回答不生硬死板。务必按照我的要求严格执行。
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
`;

export const SUMMARIZE_MODEL = "gpt-3.5-turbo-1106";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-1106-preview": "2023-04",
  "gpt-4-vision-preview": "2023-04",
};

export const DEFAULT_MODELS = [
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-16k",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-1106",
    available: true,
  },
    {
    name: "gpt-3.5-turbo-0301",
    available: true,
  },
  {
    name: "gpt-3.5-turbo-0613",
    available: true,
  },
  {
    name: "dall-e-3",
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
