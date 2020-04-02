import Link from 'next/Link';
const Index = () => (
  <div>
    <h1>Index Page</h1>
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);
export default Index;
