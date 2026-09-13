import PieceRenderer from "@/lib/pieceRenderer";
import { cn } from "@/lib/utils";

type boardProps = React.HTMLAttributes<HTMLDivElement> & {
  boardArray: Array<number>;
  children?: React.ReactNode;
};

export default function ChessBoard({
  boardArray,
  className,
  ...props
}: boardProps) {
  return (
    <div
      {...props}
      className={cn("w-125 h-125 grid grid-cols-8 grid-rows-8", className)}
    >
      {boardArray.map((piece, index) => {
        const isBlackSquare = (Math.floor(index / 8) + index) % 2 !== 0;
        return (
          <div
            key={index}
            className={`w-full h-full ${isBlackSquare ? "bg-red-500" : "bg-neutral-50"}`}
          >
            <PieceRenderer pieceValue={piece}></PieceRenderer>
          </div>
        );
      })}
    </div>
  );
}
