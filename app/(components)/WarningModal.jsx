import { useRouter } from "next/navigation";

const WarningModal = ({ isOpen, message }) => {
  const router = useRouter();

  const handleModalClose = () => {
    router.push("/");
    router.refresh();
  };

  return (
    <div
      id="modal-zone"
      className={`fixed z-10 inset-0 ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-75 transition-all">
        <div className="flex flex-col items-center justify-between rounded-md bg-card p-6 w-1/2">
          <h2 className="text-red-400 align-middle mb-4">ERRO</h2>
          <h4 className="mb-4">{message}</h4>
          <button
            className="btn bg-red-400 hover:bg-red-200 text-white"
            onClick={handleModalClose}
          >
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
