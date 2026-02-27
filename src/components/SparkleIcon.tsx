import Image from "next/image";

export default function SparkleIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt=""
      width={48}
      height={48}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
