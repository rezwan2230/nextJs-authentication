import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in : {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full mt-10"
            height={100}
            width={100}
            alt="github image"
            src={
              session?.user?.image ||
              "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"
            }
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
