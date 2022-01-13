export default function ImageGallery({ data, onOpenModal }) {
  return (
    <ul>
      {data.map(image => (
        <li
          onClick={() => {
            onOpenModal(image);
          }}
          key={image.id}
        >
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
}
