interface SortButtonProps {
  type: "desc" | "asc";
  galleryTypeHandler: () => void;
}

export default function SortButton(props: SortButtonProps) {
  return (
    <button className="gallery-c-button mb-3" onClick={props.galleryTypeHandler}>
      {props.type === "desc" && <>DESC</>}
      {props.type === "asc" && <>ASC</>}
    </button>
  );
}
