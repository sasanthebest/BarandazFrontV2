'use client'
const ExpandableText = ({children}) => {
  const textSize = children.split("").length;
  const size=17
  if (textSize <= size) return <div>{children}</div>;
//   if (textSize === size)
//     return (
//       <div>
//         <div>
//           {children}
//           <Button onClick={() => setSize(maxChars)}>Less</Button>
//         </div>
//       </div>
//     );
    return (
      <div>
        <div className="text-sm">
          {children.slice(0, size + 1)}...
        </div>
      </div>
    );
};

export default ExpandableText;
