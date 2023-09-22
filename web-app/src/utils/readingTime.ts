export function calcMDReadingTime(mdText: string) {
  const wordsPerMinute = 200;
  const numberOfWords = mdText.split(/\s/g).length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

export default calcMDReadingTime;
