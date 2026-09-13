type PieceProps = {
  isRed: boolean;
};

export default function Bishop({ isRed }: PieceProps) {
  const pieceColor = isRed ? "#f43f5e" : "#ffffff";
  const strokeColor = "#000000";
  const detailColor = "#000000";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45 45"
      className="w-full h-full p-1"
    >
      <g
        fill={pieceColor}
        fillRule="evenodd"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <g fill={pieceColor} strokeLinecap="butt">
          {/* Base */}
          <path d="M9 36c3.4-1 10.1.4 13.5-2 3.4 2.4 10.1 1 13.5 2 0 0 1.6.5 3 2-.7 1-1.6 1-3 .5-3.4-1-10.1.5-13.5-1-3.4 1.5-10.1 0-13.5 1-1.4.5-2.3.5-3-.5 1.4-2 3-2 3-2z" />

          {/* Mitre / Body */}
          <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />

          {/* Top Ball */}
          <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
        </g>

        {/* Cross & Horizontal Detail Lines */}
        <path
          fill="none"
          stroke={detailColor}
          strokeLinejoin="miter"
          d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"
        />
      </g>
    </svg>
  );
}
