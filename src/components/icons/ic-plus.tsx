import clsx from 'clsx';

export default function IcPlus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={clsx('size-6', className)}
    >
      <path
        fill="currentColor"
        d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
      ></path>
    </svg>
  );
}
