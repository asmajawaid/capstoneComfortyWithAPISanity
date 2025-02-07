import Image from 'next/image';
import Link from 'next/link';

const images = [
  { src: '/images/card5.jpg', alt: 'Image 1' },
  { src: '/images/card9.jpg', alt: 'Image 2' },
  { src: '/images/card2.jpg', alt: 'Image 3' },
  { src: '/images/card1.jpg', alt: 'Image 4' },
  { src: '/images/card3.jpg', alt: 'Image 4' },
  { src: '/images/card12.png', alt: 'Image 12' },


];

const ImageRow = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 cursor-pointer">
      {images.map((image, index) => (
        <Link href="https://www.instagram.com" target="_blank" key={index} className="w-28 h-36 relative">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </Link>
      ))}
    </div>
  );
};

export default ImageRow;