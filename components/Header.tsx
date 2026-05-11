import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="p-6 bg-blue-600 text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            My React Website
          </h1>

          <p>Week 4 React Assignment</p>
        </div>

        <ThemeToggle />
      </div>

      <Nav />
    </header>
  );
}
