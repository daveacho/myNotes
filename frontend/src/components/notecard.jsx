export default function Notecard({ note,  onClick, style }) {
   const { id, title, body, slug, category,created } = note;

  return (
      <div onClick={onClick} style={style}>
        <p className="font-medium">{title}</p>
        <p>{created}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {body}
        </p>
        <p>{category}</p>
      </div>
  );
}