import PrevNews from "@/components/PrevNews";

const Home = () => {
  return (
    <section>
      <h1 className="head_text text-center">Press Information Bureau (PIB)</h1>
      <br />
      <p className="text-center ">
        Maximising governance through effective government communication
      </p>
      <div className="left-0">
        <PrevNews />
      </div>
    </section>
  );
};

export default Home;
