import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <Image
        src="/img/notFound.svg"
        alt="Not Found"
        width="300px"
        height="300px"
      />
      <h1 className="font-semibold text-2xl mt-4">
        Yang anda cari tidak ditemukan
      </h1>
    </div>
  );
};

export default NotFound;
