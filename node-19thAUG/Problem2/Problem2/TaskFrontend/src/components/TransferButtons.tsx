type Props = {
  onLeft: () => void;
  onRight: () => void;
};

export default function TransferButtons({ onLeft, onRight }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <button
        className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded"
        onClick={onRight}
      >
        ➡
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded"
        onClick={onLeft}
      >
        ⬅
      </button>
    </div>
  );
}
