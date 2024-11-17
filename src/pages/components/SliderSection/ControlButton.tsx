import clsx from "clsx";
import Button from "../../../components/atoms/Button";
import ArrowSlim from "../../../components/icons/arrow-slim";

const ControlButton = ({
  position,
  onClick,
}: {
  position: "left" | "right";
  onClick: () => void;
}) => (
  <Button
    variant="icon"
    className={clsx(
      "absolute top-1/2 -translate-y-1/2 backdrop-blur-lg !p-2 h-max rounded-full z-10",
      position === "left" ? "left-2" : "right-2"
    )}
    onClick={onClick}
  >
    <ArrowSlim
      clasName={clsx("text-white", position === "right" && "rotate-180")}
    />
  </Button>
);

export default ControlButton;
