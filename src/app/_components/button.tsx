import Link from "next/link";

export type Props = {
  children: React.ReactNode;
  "aria-label"?: string;
} & (
  | {
      /** The book will have the primary color. */
      primary?: true;
    }
  | {
      /** The button will have a danger color. */
      danger: true;
    }
  | {
      /** The button will have a weak color. */
      weak: true;
    }
) &
  (
    | {
        /** Handler for clicks on the button. */
        onClick: React.MouseEventHandler;
      }
    | {
        /** Link the button will send you to. */
        href: string;
        /** Same as <a>'s target. */
        target?: React.HTMLAttributeAnchorTarget;
      }
  );

export default function Button(props: Props) {
  const bg =
    "danger" in props
      ? "bg-red-400"
      : "weak" in props
      ? "bg-slate-400"
      : "bg-emerald-400";

  return (
    <>
      {"href" in props ? (
        <Link
          href={props.href}
          target={props.target}
          className={`px-4 py-2 rounded-xl text-white font-bold ${bg}`}
          aria-label={props["aria-label"]}
        >
          {props.children}
        </Link>
      ) : (
        <button
          className={`px-4 py-2 rounded-xl text-white font-bold ${bg}`}
          aria-label={props["aria-label"]}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </>
  );
}
