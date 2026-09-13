type PieceProps = {
  isRed: boolean;
};

export default function Rook({ isRed }: PieceProps) {
  const pieceColor = isRed ? "#f43f5e" : "#ffffff";
  const strokeColor = "#000000";

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
        <path
          strokeLinecap="butt"
          d="M9 39h27v-3H9zm3.5-7 1.5-2.5h17l1.5 2.5zm-.5 4v-4h21v4z"
        />

        <path
          strokeLinecap="butt"
          strokeLinejoin="miter"
          d="M14 29.5v-13h17v13z"
        />

        <path
          strokeLinecap="butt"
          d="M14 16.5 11 14h23l-3 2.5zM11 14V9h4v2h5V9h5v2h5V9h4v5z"
        />

        <path
          fill="none"
          stroke={strokeColor}
          strokeLinejoin="miter"
          strokeWidth="1"
          d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23"
        />
      </g>
    </svg>
  );
}
