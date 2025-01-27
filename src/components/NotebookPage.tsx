import TypographyH2 from "@/components/typography/TypographyH2";

export default function NotebookPage({ title, Component }: { title: string, Component: React.ComponentType }) {
    return (
      <div className="w-full max-w-[1000px] px-2">
        <div className="mb-2">
          <TypographyH2>{ title }</TypographyH2>
        </div>
        <div className="prose break-words whitespace-pre-wrap">
          <Component />
        </div>
      </div>
    );
}