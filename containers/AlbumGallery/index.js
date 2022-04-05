import tw from "tailwind-styled-components";
import { AlbumHead } from "../../components/AlbumHead";
import { AlbumCard } from "../../components/AlbumCard";
export const AlbumGallery = ({ src, data }) => {
  return (
    <GalleryWrapper>
      <AlbumHead src={src} title={data.albumTitle} auther={data.auther} />
      {data.songs.map((item, index) => {
        return (
          <AlbumCard
            src={src}
            key={index}
            title={item.title}
            desc={item.desc}
            license={item.license}
          />
        );
      })}
    </GalleryWrapper>
  );
};

const GalleryWrapper = tw.div`
  pt-20
  pl-8
  gap-10
`;
