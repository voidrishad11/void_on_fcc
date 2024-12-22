const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;


const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  if (sorted.length % 2 === 0) {
    const a = sorted[sorted.length/2];
    const b = sorted[sorted.length/2 -1];
    return getMean([a,b]);
  }
  else{
    return sorted[Math.floor(sorted.length/2)];
  }
}

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  
  const mean = getMean(numbers);
  const median = getMedian(numbers);

  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
}

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => counts[el] = counts[el] ? counts[el] + 1 : 1);
    return counts;
}