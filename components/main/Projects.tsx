import React from "react";
import { ProjectCard } from "@/components/sub/ProjectCard";

export const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center py-20"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-wrap justify-center gap-10 px-10">

                <ProjectCard
                    src="/island.png"
                    title="Island Generator"
                    description="Procedural terrain generation (islands in our case) is an approach used to create varied environments, which are generally more difficult to do without code. It also saves time in the design process."
                    link="https://github.com/sou-design/IslandGenerator_"
                />
                <ProjectCard
                    src="/erinyes.png"
                    title="Erinyes"
                    description="You are the ghost of a recently murdered actress. You must explore your theater, search for clues, and decide who among the troupe of actors should be the victim of your revenge. Will you be strong enough to solve this mystery without losing your mind to anger and rage?"
                    link="https://gamagora.itch.io/erinyes"
                />
                <ProjectCard
                    src="/BrickBreaker.jpeg"
                    title="Brick Breaker 2D"
                    description="Brick Breaker is a classic arcade-style game where players control a paddle at the bottom of the screen to bounce a ball and break bricks at the top."
                    link="https://github.com/sou-design/BrickBreaker2D"
                />
                <ProjectCard
                    src="/bowling.png"
                    title="VR Bowling Game"
                    description="With realistic physics and intuitive controls, players can enjoy the authentic bowling experience from the comfort of their VR headset."
                    link="https://github.com/sou-design/game_bowling_vr"
                />
                <ProjectCard
                    src="/minimax.png"
                    title="TicTacToe Minimax"
                    description="A simple Tic Tac Toe game using Minimax algorithm."
                    link="https://github.com/sou-design/TicTacToeMiniMax"
                />
                <ProjectCard
                    src="/pizzamaker.png"
                    title="Pizza Maker"
                    description="It's a simple game where I used an image processing algorithm (emgucv) to put ingredients on pizza's dough."
                    link="https://github.com/sou-design/PizzaMaker_"
                />
                <ProjectCard
                    src="/RL.png"
                    title="TicTacToe Reinforcement Learning"
                    description="Tic Tac Toe Reinforcement Learning is a game where players compete against an AI agent that learns to play the game through reinforcement learning algorithms."
                    link="https://github.com/sou-design/RL_TicTacToe"
                />
                <ProjectCard
                    src="/anpr.jpg"
                    title="Master 2 Project: Licence Plate Recognition"
                    description="The aim of this project is to conceive an automatic number plate recognition system (ANPR), fast and efficient, able to control access to car parks."
                    link="https://github.com/sou-design/Licence-Plate-recognition"
                />
            </div>
        </section>
    );
};

export default Projects;