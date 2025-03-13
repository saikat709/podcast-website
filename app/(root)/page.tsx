import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1"> Trending Podcasts </h1>
       <div className="podcast_grid">
        {/* <Button variant={"outline"}> Button </Button> */}
        {
          podcastData.map( (podcast) => {
            return <PodcastCard 
              key={podcast.id}
              id={podcast.id}
              title={podcast.title}
              description={podcast.description}
              imgURL={podcast.imgURL}
            />;
          })
        }
        </div>
      </section>
    </div>
  );
}

export default Home;