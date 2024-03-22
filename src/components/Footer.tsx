import data from "../data/site.json";

const { footer } = data;

export default function Footer() {
  return (
    <footer>
      <p>{footer}</p>
    </footer>
  );
}
