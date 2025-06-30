import React from 'react';

const ProductColors = ({ colors = [] } = {}) => {
  if (!colors.length) return null;

  const uniqueColors = Array.from(new Set(colors));
  const visibleColors = uniqueColors.slice(0, 3); // only first 3
  const remainingCount = uniqueColors.length - 3;

  return (
    <div>
      <div className="flex gap-[2px] items-center">
        {visibleColors.map((color) => (
          <div
            key={color}
            className="w-3 h-3 rounded-xs"
            style={{ backgroundColor: color }}
          />
        ))}

        {remainingCount > 0 && (
          <div className="font-normal text-[#5A5A5A] leading-3 text-[10px]">
            +{remainingCount} more shades
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductColors;
