import Link from "next/link";

interface ServiceCardProps {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ href, icon, title, description }: ServiceCardProps) {
  return (
    <div className="col-md-4 col-lg-4 d-flex">
      <Link href={href} className="service-card text-center p-4 shadow-sm h-100 w-100">
        <div className="icon mb-3">
          <i className={`bi ${icon}`}></i>
        </div>
        <h5>{title}</h5>
        <p>{description}</p>
      </Link>
    </div>
  );
}
