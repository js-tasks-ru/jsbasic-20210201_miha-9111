function camelize(str) {
  return str
  .split('-')
  .map((itemStr, index) => index === 0 ? itemStr : itemStr[0].toUpperCase() + itemStr.slice(1))
  .join('');
}
