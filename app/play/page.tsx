"use client";

import Navbar from "@/components/navbar";
import ChessBoard from "@/components/chessBoard";
import Card from "@/components/card";

export default function Page() {
  const arr1: number[] = [
    0, 0, 0, 0, -6, -3, 0, -4, -1, 0, 0, -2, 0, -1, -1, -1, 0, 0, 0, 0, -5, 0,
    0, 0, 0, 0, 0, 0, -1, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 6, 4, 0, 0, 0, 0,
  ];
  const arr2: number[] = [
    -3, 0, 0, -4, 0, 0, 0, -4, -6, 0, 0, 0, 0, -1, 0, -1, -1, 0, 0, -5, 0, -2,
    -1, 0, 2, -1, -1, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 5, 0, 0, 1, 0, 0, 0, 0, 1,
    1, 3, 0, 1, 1, 0, 0, 0, 0, 1, 0, 6, 0, 4, 4, 0, 0, 0,
  ];
  const arr3: number[] = [
    -4, 0, 0, -5, 0, 0, 0, -6, -1, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, -1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, -1, 0, 5, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 6, 0,
  ];

  return (
    <div className="flex flex-col min-h-screen w-full justify-start bg-neutral-950 text-neutral-50">
      <Navbar />
      <div className="flex flex-1 flex-wrap gap-10 items-center justify-evenly p-8">
        <Card className="cursor-pointer">
          <p className="font-extrabold text-2xl text-center mb-6">
            Pass & Play
          </p>
          <ChessBoard boardArray={arr1} className="w-80 h-80 aspect-square" />
          <p className="font-light text-center text-neutral-400 mt-6 max-w-[320px]">
            Challenge a friend locally for a classic face-to-face tactical
            showdown.
          </p>
        </Card>

        <Card className="cursor-pointer">
          <p className="font-extrabold text-2xl text-center mb-6">
            Online Match
          </p>
          <ChessBoard boardArray={arr2} className="w-80 h-80 aspect-square" />
          <p className="font-light text-center text-neutral-400 mt-6 max-w-[320px]">
            Compete against fellow chess masters in real-time ranked multiplayer
            battles.
          </p>
        </Card>

        <Card className="cursor-pointer">
          <p className="font-extrabold text-2xl text-center mb-6">
            Play with Engine
          </p>
          <ChessBoard boardArray={arr3} className="w-80 h-80 aspect-square" />
          <p className="font-light text-center text-neutral-400 mt-6 max-w-[320px]">
            Test your strategic prowess against the advanced Spell Chess AI
            evaluation engine.
          </p>
        </Card>
      </div>
    </div>
  );
}
// <div className="mx-24 min-h-0 flex-1">
//   <div className="grid h-full grid-cols-16 grid-rows-10 items-center">
//     <div className="col-span-6">
//       <Button>Placeholder</Button>
//     </div>

//     <ChessBoard
//       boardArray={arr}
//       className="h-full w-auto aspect-square col-span-8 row-start-2 row-span-8"
//     />

//     <div className="col-span-6 row-start-10">
//       <Button>Placeholder</Button>
//     </div>
//   </div>
// </div>;
