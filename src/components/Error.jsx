import { IoWarningOutline } from "react-icons/io5";

const Error = ({ msg, retry }) => {
  return (
    <>
      <div className="flex gap-4 bg-red-500 p-5 bg-opacity-80 text-white my-10">
        <IoWarningOutline className="text-5xl" />
        <div>
          <h2>Üzgünüz Bir Hata Oluştu!!</h2>
          <p>{msg}</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={retry}
          className="shadow border font-semibold rounded px-5 py-2 hover:bg-gray-100"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
