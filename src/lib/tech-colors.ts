/** Brand-ish accent colors per technology, used for small dots/bars so the
 * site reads as more colorful without turning into a random rainbow. */
export const techColors: Record<string, string> = {
  "Node.js": "#3C873A",
  "C#": "#9B4F96",
  ".NET": "#512BD4",
  "C# / .NET": "#512BD4",
  TypeScript: "#3178C6",
  JavaScript: "#F1E05A",
  "Entity Framework": "#7C4DFF",
  "EF Core": "#7C4DFF",
  SQL: "#336791",
  PostgreSQL: "#336791",
  SQLite: "#44A833",
  Prisma: "#16A394",
  "Next.js": "#E5E7EB",
  "Next.js / React": "#61DAFB",
  React: "#61DAFB",
  "Tailwind CSS": "#38BDF8",
  Blazor: "#8B5CF6",
  Razor: "#8B5CF6",
  "Blazor / Razor": "#8B5CF6",
  WordPress: "#21759B",
  PHP: "#777BB4",
  "HTML/CSS": "#E34C26",
  HTML: "#E34C26",
  CSS: "#2965F1",
  Docker: "#2496ED",
  Electron: "#9FEAF9",
  JWT: "#F59E0B",
  Git: "#F05032",
  "AWS Lambda": "#FF9900",
  "AWS Cognito": "#FF9900",
  NoSQL: "#4DB33D",
  "Soporte técnico": "#94A3B8",
  "Internal banking systems": "#94A3B8",
  "Sistemas bancarios internos": "#94A3B8",
};

export function techColor(name: string): string {
  return techColors[name] ?? "#818CF8";
}
