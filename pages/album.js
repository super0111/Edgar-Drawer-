import { albumData } from "../data";
import { AlbumGallery } from "../containers/AlbumGallery";
export default function Album({
  src = "ce683555-17a3-43e7-84c2-00315eaa752f.jpg",
}) {
  const data = albumData[0];
  return (
    <>
      <div>discover > Aaron Wayne > Let There Be House</div>
      <AlbumGallery src={src} data={data} />
    </>
  );
}
