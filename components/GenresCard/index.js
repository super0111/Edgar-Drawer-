import Link from "next/link";
import tw from "tailwind-styled-components";
import { MyImage } from "../MyImage";

export const GenresCard = ({ to, src, title }) => {
  return (
    <Wrapper>
      <Link href={to}>
        <a>
          <div className="absolute bg-black bg-opacity-80 z-10">
            <div className="relative w-[160px] h-[90px]">
              <MyImage src={src} width="160px" height="90px" />
              <p className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold text-xl">
                {title}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full
  flex
  mb-20
`;
