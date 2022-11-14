import Image from 'next/image';
import React from 'react';
import movieFinderImg from '../public/assets/projects/movie-finder2.png';
import memeGeneratorImg from '../public/assets/projects/meme-generator.png';
import pizzaImg from '../public/assets/projects/pizzapolice.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="m-w-[1240px] mx-auto px-2 py-16 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="MovieFriend"
            bgImg={movieFinderImg}
            projectUrl="/moviefriend"
            techStack="ReactJS | Public API"
          />
          <ProjectItem
            title="Meme Generator"
            bgImg={memeGeneratorImg}
            projectUrl="/meme"
            techStack="ReactJS"
          />
          <ProjectItem
            title="Pizza Police"
            bgImg={pizzaImg}
            projectUrl="/pizza"
            techStack="ReactJS | NodeJS | MongoDB"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
