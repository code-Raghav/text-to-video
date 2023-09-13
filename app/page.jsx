"use client";
import PrevNews from "@/components/PrevNews";
import NewsMain from "@components/NewsMain";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const hightlightsOnly = false;

  const searchParams = useSearchParams();
  const [newsId, setNewsId] = useState(searchParams.get("id"));

  return (
    <section>
      <h1 className="head_text text-center">Press Information Bureau (PIB)</h1>
      <br />
      <p className="text-center ">
        Maximising governance through effective government communication
      </p>
      <div className="flex flex-col-2 gap-4 pt-16">
        <PrevNews setNewsId={setNewsId} />
        <NewsMain hightlightsOnly={hightlightsOnly} newsId={newsId} />
      </div>
    </section>
  );
};

export default Home;
