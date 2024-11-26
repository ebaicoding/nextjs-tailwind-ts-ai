// app/utils/imageLoader.ts
interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith('/')) {
    return `/nextjs-tailwind-ts-ai${src}`
  }
  return src
}