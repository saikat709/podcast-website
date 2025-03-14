"use client";

import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";
import React from 'react';

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const Home = () => {

  const tasks = useQuery(api.tasks.get);
  console.log(tasks);

  return (
    <div className="flex flex-col gap-5 mt-10">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1"> Trending Podcasts </h1>
       <div className="podcast_grid flex-1 mx-auto p-1">
        { podcastData.map( (podcast) => {
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