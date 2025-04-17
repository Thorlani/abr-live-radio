import React from "react";

const TitleAndDescription = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <div>
      {title && <h2 className="font-bold text-2xl">{title}</h2>}
      {description && (
        <p className="px-[10px] font-semibold text-[#5A5A5A] border-l-[2px] border-[#CC0001]">
          {description}
        </p>
      )}
    </div>
  );
};

export default TitleAndDescription;
