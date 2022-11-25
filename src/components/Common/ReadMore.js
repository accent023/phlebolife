import Image from "next/image";
import Link from "next/link";
import arrowLeft from "../../assets/images/arrow-left.png";

const ReadMore = ({ children, href, className }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={className}>
        {children}
        <Image src={arrowLeft} alt="call" />
      </a>
    </Link>
  );
};

export default ReadMore;
