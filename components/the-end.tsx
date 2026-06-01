import SectionHeading from "@/components/section-heading";

export default function TheEnd() {
  return (
    <section className="end-section pb-4 flex flex-col gap-32 gap-3">
      <SectionHeading
        mainText="The End"
        outerClassName="me-auto w-fit flex flex-col gap-1"
        secondaryContent={<span>Thanks for visiting!</span>}
      />
      <div
        className="subtext ms-auto leading-none text-right"
      >
        <span className="text-xs">Designed in Figma and coded with Visual Studio Code. Built with Next.js and Tailwind CSS. All text is set in Europa Grotesk font.</span>
      </div>
    </section>
  );
}