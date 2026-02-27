export default function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 50 48"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main 4-pointed star */}
      <path d="M18 6 Q19.5 23, 36 25 Q19.5 27, 18 44 Q16.5 27, 0 25 Q16.5 23, 18 6Z" />
      {/* Medium star — top right */}
      <path d="M36 3 Q36.8 9, 43 10 Q36.8 11, 36 17 Q35.2 11, 29 10 Q35.2 9, 36 3Z" />
      {/* Small star — far top right */}
      <path d="M44 0 Q44.4 2.5, 48 3 Q44.4 3.5, 44 6 Q43.6 3.5, 40 3 Q43.6 2.5, 44 0Z" />
    </svg>
  );
}
