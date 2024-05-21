import React from "react";
import Entry from "./Entry";

function EntryContainer() {
  return (
    <section className="relative -left-12 w-full">
      <div className="flex w-[calc(100%+6rem)] gap-6 overflow-x-auto first:pl-10 last:pr-10 scrollbar-hide">
        <Entry
          title={"The Shawshank Redemption"}
          category={"Movie"}
          genre={"Drama"}
          director={"Frank Darabont"}
          year={1994}
          description={
            "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
          }
        />
        <Entry
          title={"Minecraft"}
          category={"Game"}
          genre={"Sandbox"}
          publisher={"Mojang"}
          year={2011}
          description={"A game about placing blocks and going on adventures."}
        />
        <Entry
          title={"World of Warcraft"}
          category={"Game"}
          genre={"MMORPG"}
          publisher={"Blizzard Entertainment"}
          year={2004}
          description={"A massively multiplayer online role-playing game."}
        />
      </div>
    </section>
  );
}

export default EntryContainer;
