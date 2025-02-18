interface Props {
  func: Function;
  buttonID: string;
  barID: string;
  icon: React.ReactElement;
  heading: string;
  description: string;
}

export default function BasicButton({
  func,
  buttonID,
  icon,
  heading,
  description,
  barID,
}: Props) {
  return (
    <button
      onClick={() => func}
      id={buttonID}
      className="p-1 my-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight  disabled:text-themeTertiary disabled:border-themeTertiary"
    >
      <div className="flex">
        {icon}
        <div className="px-5 py-5">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div id={barID} className="w-full h-2 bg-themeHighlight rounded-sm"></div>
    </button>
  );
}
