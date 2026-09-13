// PieceRenderer.tsx
import Pawn from "@/public/pieces/pawn";
import Knight from "@/public/pieces/knight";
import Bishop from "@/public/pieces/bishop";
import Rook from "@/public/pieces/rook";
import Queen from "@/public/pieces/queen";
import King from "@/public/pieces/king";

// Define your piece enum mapping according to your C++ enum
export const PIECES = {
  EMPTY: 0,
  WHITE_PAWN: 1,
  WHITE_KNIGHT: 2,
  WHITE_BISHOP: 3,
  WHITE_ROOK: 4,
  WHITE_QUEEN: 5,
  WHITE_KING: 6,
  BLACK_PAWN: -1,
  BLACK_KNIGHT: -2,
  BLACK_BISHOP: -3,
  BLACK_ROOK: -4,
  BLACK_QUEEN: -5,
  BLACK_KING: -6,
} as const;

type PieceRendererProps = {
  pieceValue: number;
};

export default function PieceRenderer({ pieceValue }: PieceRendererProps) {
  if (pieceValue === PIECES.EMPTY) return null;

  const isRed = pieceValue < 0;

  switch (pieceValue) {
    case PIECES.WHITE_PAWN:
    case PIECES.BLACK_PAWN:
      return <Pawn isRed={isRed} />;
    case PIECES.WHITE_KNIGHT:
    case PIECES.BLACK_KNIGHT:
      return <Knight isRed={isRed} />;
    case PIECES.WHITE_BISHOP:
    case PIECES.BLACK_BISHOP:
      return <Bishop isRed={isRed} />;
    case PIECES.WHITE_ROOK:
    case PIECES.BLACK_ROOK:
      return <Rook isRed={isRed} />;
    case PIECES.WHITE_QUEEN:
    case PIECES.BLACK_QUEEN:
      return <Queen isRed={isRed} />;
    case PIECES.WHITE_KING:
    case PIECES.BLACK_KING:
      return <King isRed={isRed} />;
    default:
      return null;
  }
}
