import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `https://admin.dequency.io/assets/${src}?w=${width}&q=${
    quality || 75
  }`;
};

export const MyImage = ({ src, width, height }) => {
  return (
    <div>
      <Image
        className="rounded-lg"
        loader={myLoader}
        src={src}
        alt="Picture of the author"
        width={width}
        height={height}
        draggable={false}
        objectFit="cover"
      />
    </div>
  );
};
