import { Separator } from "@/components/ui/separator";

export default function SubtitleMd({ children }: { children: string }) {
  return (
    <>
      <h3 className="scroll-m-20 mt-6 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
      <Separator className="mt-2 mb-6" />
    </>
  )
}