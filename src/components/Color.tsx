interface ColorProps {
  hex: string;
  name: string;
}

const Color = ({ hex, name }: ColorProps) => {
  return (
    <div className="color-square" style={{ backgroundColor: hex }}>
      <h2>{name}</h2>
    </div>
  );
};

export default Color;
