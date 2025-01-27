export default function TypographyBlockquote({ children } : { children : string }) {
    return (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        { children }
      </blockquote>
    )
  }
  