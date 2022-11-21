function Slider(props) {
  const { name, src, id } = props;
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={src} alt={name} />
    </div>
  );
}
export default Slider;
