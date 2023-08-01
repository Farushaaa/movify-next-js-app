import Movie from "@/components/Movie";

export default async function Page() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  console.log(res);

  return (
    <main>
      <div className="grid gap-16 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]">
        {res.results?.map((movie) => (
          <Movie
            title={movie.title}
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
