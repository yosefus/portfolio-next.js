export const filter = ({ FilterQuery, WorkArr }) => {
  const filterdByDiff = FilterQuery.difficulty
    ? WorkArr.filter((i) => i.difficulty === FilterQuery.difficulty)
    : WorkArr;

  const filterdBySearch = FilterQuery.search
    ? filterdByDiff.filter((i) => i.tec.find((tec) => tec.includes(FilterQuery.search.toLowerCase())))
    : filterdByDiff;

  const filterdBypath = FilterQuery.sort_path
    ? filterdBySearch.filter((i) => i.sort_path.find((s) => s === FilterQuery.sort_path))
    : filterdBySearch;

  return filterdBypath;
};
