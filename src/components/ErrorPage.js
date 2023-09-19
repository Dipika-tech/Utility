import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
    <div className="text-center">
    <h1 className="display-1 fw-bold">{error.status}</h1>
    <p className="fs-3"> <span className="text-danger">Opps! </span>{error.statusText || error.message}</p>
    <p className="lead">
        Sorry, an unexpected error has occurred.
      </p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
    </div>
    </>
  );
}