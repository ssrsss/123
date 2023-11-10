import { SafeSearchType, search } from "duck-duck-scrape";
import { convert as htmlToText } from "html-to-text";
import { Tool } from "langchain/tools";

export class DuckDuckGo extends Tool {
  name = "duckduckgo_search";
  maxResults = 4;

  /** @ignore */
  async _call(input: string) {
    const searchResults = await search(input, {
      safeSearch: SafeSearchType.OFF,
    });

    if (searchResults.noResults) {
      return "No good search result found";
    }

    const results = searchResults.results
      .slice(0, this.maxResults)
      .map(({ title, description, url }) => htmlToText(description))
      .join("\n\n");

    return results;
  }

  description =
    "a search engine. useful for when you need to answer questions about current events. input should be a search query.Using the provided web search results, write a comprehensive reply to the given query.If the provided search results refer to multiple subjects with the same name, write separate answers for each subject.After analyzing the answer, there is no need to prompt (based on the provided search results) and the analysis content can be provided directly.Please send the first line annotation again. Ernie sauce will search for you:Make sure to cite results using \`[[number](URL)]\` notation after the reference.";
}
