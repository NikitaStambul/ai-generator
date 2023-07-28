import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function LandingPage() {
  return <div>Landing page (unprotected)
    <div>
      <Link href='/sign-in' className={buttonVariants()}>
        Sign In
      </Link>
      <Link href='/sign-in' className={buttonVariants()}>
        Sign Up
      </Link>
    </div>
  </div>;
}
