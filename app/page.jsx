"use client";
import PrevNews from "@/components/PrevNews";
import InputField from "@components/InputField";
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
      <p className="text-center font-inter text-lg">
        Maximising governance through effective government communication
      </p>
      <div className="font-inter pt-8">
        <p>
          Press Information Bureau (PIB) is the nodal agency of the Government
          of India to disseminate information to the print and electronic media
          on government policies, programmes, initiatives and achievements. It
          functions as an interface between the government and media & also
          serves to provide feedback to the government on people`s reaction as
          reflected in the media.
        </p>
        <br />
        <p>
          PIB disseminates information through different modes of communication
          viz. press releases, press notes, explainer, factsheets & feature
          articles, photographs, videos, infographics and also through social
          media platforms. Information disseminated is released in English,
          Hindi & Urdu and subsequently translated in other Indian languages to
          reach out to about 8400 newspapers and media organisations in
          different parts of the country.
        </p>
        <br />
        <p>
          In addition, the PIB also organizes Press Conferences, Press
          Briefings, Interviews of the Ministers/Secretaries and other senior
          officers for sensitizing media persons on important policy initiatives
          of the Government. The Bureau also conducts press tours to select
          project sites to enable the media to have a first hand account of
          developmental activities going on in the country and help them in
          communicating the important policies of the government.
        </p>
      </div>
      <div className="flex flex-col-2 gap-4 pt-16">
        <div>
          <PrevNews setNewsId={setNewsId} />
        </div>
        {newsId ? (
          <NewsMain hightlightsOnly={hightlightsOnly} newsId={newsId} />
        ) : (
          <div className="w-full">
            <InputField setNewsId={setNewsId} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
