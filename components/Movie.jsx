import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, id, release_date, poster_path }) => {
  const image_path = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>{title}</h1>
      <h3>{release_date}</h3>
      <Link href={`/${id}`}>
        <Image
          src={image_path + poster_path}
          width={880}
          height={880}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
