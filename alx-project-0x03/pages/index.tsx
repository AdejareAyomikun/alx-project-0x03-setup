import Button from "@/components/common/Button";
import { PageRouteProps } from "@/interface";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen text-center">
      {/* Welcome Message */}
      <h1 className="mb-4 font-bold text-gray-800 text-4xl">Welcome to Splash App</h1>
    
    </div>
  );
}
