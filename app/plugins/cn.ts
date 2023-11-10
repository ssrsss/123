import { BuiltinPlugin } from "./typing";

export const CN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "联网功能",
    toolName: "web-search",
    lang: "cn",
    description: "搜索引擎的网络搜索功能工具。指令:搜索一下+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "计算器",
    toolName: "calculator",
    lang: "cn",
    description: "用于计算数学表达式的工具。指令:计算+内容",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "网页爬虫",
    toolName: "web-browser",
    lang: "cn",
    description:
      "可以从网页中提取信息或总结其内容。指令:网址+要求",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
  },
  {
    name: "维基百科",
    toolName: "WikipediaQueryRun",
    lang: "cn",
    description: "维基百科在线搜索助手。指令:在wiki查找+内容",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
  },
  {
    name: "ArXiv论文库",
    toolName: "arxiv",
    lang: "cn",
    description: "使用Arxiv搜索并获取论文信息。",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
  },
];
