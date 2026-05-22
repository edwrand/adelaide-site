const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

export default function Img({ src, alt, fill, priority: _priority, style, ...props }: Props) {
  const resolvedSrc = src.startsWith("/") ? BASE + src : src;
  if (fill) {
    return (
      <img
        src={resolvedSrc}
        alt={alt}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", ...style }}
        {...props}
      />
    );
  }
  return <img src={resolvedSrc} alt={alt} style={style} {...props} />;
}
