export default function ImagePlaceholder({
  text = "Image",
  aspectRatio = "16/10",
  className = "",
}: {
  text?: string;
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-background-tertiary flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
    >
      <span className="text-xs uppercase tracking-[0.15em] text-foreground-tertiary font-medium">
        {text}
      </span>
    </div>
  );
}
