import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="code">404</div>
      <h2>This field hasn't been planted yet.</h2>
      <p>The page you're looking for doesn't exist or may have moved.</p>
      <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>
    </div>
  );
}
