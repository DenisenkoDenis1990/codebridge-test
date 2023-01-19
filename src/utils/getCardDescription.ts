// cutting description up to 100 characters

export const getCardDescription = (summary: string) => {
  return summary.length > 100 ? summary.slice(0, 97) + "..." : summary;
};
