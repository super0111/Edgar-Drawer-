import tw from "tailwind-styled-components";
import { MyImage } from "../MyImage";
export const MusicCard = ({ src, title, subtitle1, subtitle2 }) => {
  return (
    <Wrapper>
      <Container>
        <MyImage src={src} width="120" height="120" />
        <p className="text-sm font-semibold mt-1">{title}</p>
        <p className="text-sm font-semibold mt-1">{subtitle1}</p>
        <p className="text-xs font-normal mt-0.5">{subtitle2}</p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex  
  flex-col
  mr-8
`;
const Container = tw.div`
  rounded-lg
  w-[120px]
`;
