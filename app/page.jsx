import PrevNews from "@/components/PrevNews";
import NewsMain from "@components/NewsMain";

const Home = () => {
  const hightlightsOnly = false;
  const handleNewsClick = () => {};
  return (
    <section>
      <h1 className="head_text text-center">Press Information Bureau (PIB)</h1>
      <br />
      <p className="text-center ">
        Maximising governance through effective government communication
      </p>
      <div className="flex flex-col-2">
        <PrevNews />
        <NewsMain hightlightsOnly={hightlightsOnly} />
      </div>
    </section>
  );
};

export default Home;
