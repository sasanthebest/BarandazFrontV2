const ExpandableText = ({children ,size,cssClass}) => {
  const textSize = children.split("").length;
  
  return (
    <>
      {textSize <= size ? (
        <div className="text-sm">{children}</div>
      ) : (
        <div className={`text-sm ${cssClass}`}>
          {children.slice(0, size + 1)}...
        </div>
      )}
    </>
  );
};

export default ExpandableText;
