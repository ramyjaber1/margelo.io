import Image from "next/image";
import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper, WorkLink } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./work";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://pinkpanda.io">Pink Panda&apos;s app</WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src={`https://margelo.io/assets/works/pinkpanda.png`}
                layout="responsive"
                width="840"
                height={1620}
                alt="pink panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We made</div>
            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <WorkLink href="https://pinkpanda.io"> Steakwallet&nbsp;faster</WorkLink>
            </div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image
              src={`https://margelo.io/assets/works/steakwallet.png`}
              layout="responsive"
              width="840"
              height={1620}
              alt="Steakwallet"
            />
          </WorkRight>
        </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We helped</div>
            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <WorkLink href="https://pinkpanda.io">Showtime ship faster. </WorkLink>
            </div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image
              src={`https://margelo.io/assets/works/showtime.png`}
              layout="responsive"
              width={840}
              height={1620}
              alt="showtime"
            />
          </WorkRight>
        </WorkContainer>
        )}
      ></Tile>
      
    </TileContent>
  </TileWrapper>
);

export default Works;
