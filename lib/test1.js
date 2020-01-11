function spiderJumps(startPos, endPos, jumpLenght) {
  const lenght = endPos - startPos;
  if (lenght <= 0) {
    return 0;
  }
  return Math.ceil(lenght / jumpLenght);
}

module.exports = spiderJumps;
