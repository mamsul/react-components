import { useState } from "react";
import BottomSheet from "../../components/molecules/BottomSheet";

export default function BottomSheetSection() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div>
      <button className="btn btn-info" onClick={() => setIsSheetOpen(true)}>
        Open Bottom Sheet
      </button>

      <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
        <p>Content Here</p>
      </BottomSheet>
    </div>
  );
}
