// logic for keywords highlighting

export const getFilteredNews = (text: string, searchQuery: string) => {
  return text
    .toLowerCase()
    .split(" ")
    .some((element: string) =>
      searchQuery.toLowerCase().split(" ").includes(element)
    );
};
