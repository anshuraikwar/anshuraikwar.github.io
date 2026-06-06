interface SectionHeadingProps {
  mainText: string;
  outerClassName?: string;
  secondaryContent?: React.ReactNode;
  secondaryClassName?: string;
}

export default function SectionHeading({
  mainText,
  outerClassName = "ms-auto",
  secondaryContent,
  secondaryClassName = "text-sm flex align-center justify-end absolute w-full -bottom-[1.6em]",
}: SectionHeadingProps) {
  const splitIndex = mainText.length - 1;
  const displayText = mainText.slice(0, splitIndex);
  const lastChar = mainText.slice(splitIndex);

  return (
    <div className={`${outerClassName} relative`} style={{ fontSize: "min(12vw, 180px)" }}>
      <div className="flex align-start overflow-hidden" style={{ fontSize: "min(12vw, 180px)" }}>
        <h2 className="font-medium leading-[1em]">
          <span className="tracking-[-0.04em]">{displayText}</span>
          {lastChar}
        </h2>
      </div>
      {secondaryContent && (
        <div className={secondaryClassName}>
          {secondaryContent}
        </div>
      )}
    </div>
  );
}
