"use client";

interface Props {
  content: string;
}

function parseInline(text: string): React.ReactNode[] {
  // Split on **bold** patterns
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function BlogContent({ content }: Props) {
  const lines = content
    .trim()
    .split("\n")
    .map((l) => l.trimEnd());

  const nodes: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
    if (line.trim() === "") {
      i++;
      continue;
    }

    // ## Heading 2
    if (line.startsWith("## ")) {
      nodes.push(
        <h2
          key={i}
          className="text-2xl font-bold text-gray-900 mt-10 mb-4 first:mt-0"
        >
          {line.slice(3)}
        </h2>,
      );
      i++;
      continue;
    }

    // ### Heading 3
    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-7 mb-3">
          {line.slice(4)}
        </h3>,
      );
      i++;
      continue;
    }

    // **Bold paragraph label (like "**1. Something**")
    if (line.startsWith("**") && line.endsWith("**")) {
      nodes.push(
        <p key={i} className="font-semibold text-gray-900 mt-5 mb-1">
          {line.slice(2, -2)}
        </p>,
      );
      i++;
      continue;
    }

    // Unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      nodes.push(
        <ul
          key={i}
          className="list-disc list-outside ml-5 space-y-1.5 my-4 text-gray-700"
        >
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // Regular paragraph
    nodes.push(
      <p key={i} className="text-gray-700 leading-relaxed mb-4">
        {parseInline(line)}
      </p>,
    );
    i++;
  }

  return (
    <div className="prose-blog max-w-none text-base leading-relaxed">
      {nodes}
    </div>
  );
}
