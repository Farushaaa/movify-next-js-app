import Image from "next/image";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const image_path = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <section class="dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            {res.title}
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {res.overview}
          </p>
          <div>
            <p>
              Release Date: <span>{res.release_date}</span> <br />
            </p>
            <p>
              Vote Average: <span>{res.vote_average}</span>
            </p>
            <p></p>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src={image_path + res.backdrop_path}
            width={1000}
            height={1000}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
