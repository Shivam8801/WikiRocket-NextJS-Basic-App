export default async function getWikiResults(searchTerm: string) {
  // a fix for the space character
  const searchText = searchTerm.replaceAll("%20", "+");

  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: searchText,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });

  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );

  return response.json();
}
