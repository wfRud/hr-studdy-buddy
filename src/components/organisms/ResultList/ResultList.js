import { ResultListWrapper, ResultItem } from './ResultList.style';

export const ResultList = ({ data }) => (
  <ResultListWrapper>
    {data.map((item) => (
      <ResultItem key={item.name}>{item.name}</ResultItem>
    ))}
  </ResultListWrapper>
);
