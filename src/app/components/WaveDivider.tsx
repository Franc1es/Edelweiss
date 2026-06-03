interface WaveDividerProps {
  fill?: string;
  flip?: boolean;
}

export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 72"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 block"
      >
        <path
          d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
