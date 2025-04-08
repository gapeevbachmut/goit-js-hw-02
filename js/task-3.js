'use strict';

function getElementWidth(content, padding, border) {
  let contentWidth = Number.parseFloat(content);
  let paddingWidth = Number.parseFloat(padding);
  let borderWidth = Number.parseFloat(border);
  const result = contentWidth + paddingWidth * 2 + borderWidth * 2;
  return result;
}
console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
