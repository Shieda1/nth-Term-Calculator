// https://calculator.swiftutors.com/nth-term-calculator.html

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sumofnthTermRadio = document.getElementById('sumofnthTermRadio');
const firstTermintheSeriesRadio = document.getElementById('firstTermintheSeriesRadio');
const totalNumberofTermsRadio = document.getElementById('totalNumberofTermsRadio');
const commonDifferenceRadio = document.getElementById('commonDifferenceRadio');

let sumofnthTerm;
let firstTermintheSeries = v1;
let totalNumberofTerms = v2;
let commonDifference = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

sumofnthTermRadio.addEventListener('click', function() {
  variable1.textContent = 'First Term in the Series';
  variable2.textContent = '(n) Total Number of Terms';
  variable3.textContent = 'Common Difference';
  firstTermintheSeries = v1;
  totalNumberofTerms = v2;
  commonDifference = v3;
  result.textContent = '';
});

firstTermintheSeriesRadio.addEventListener('click', function() {
  variable1.textContent = 'Sum of nth Term';
  variable2.textContent = '(n) Total Number of Terms';
  variable3.textContent = 'Common Difference';
  sumofnthTerm = v1;
  totalNumberofTerms = v2;
  commonDifference = v3;
  result.textContent = '';
});

totalNumberofTermsRadio.addEventListener('click', function() {
  variable1.textContent = 'Sum of nth Term';
  variable2.textContent = 'First Term in the Series';
  variable3.textContent = 'Common Difference';
  sumofnthTerm = v1;
  firstTermintheSeries = v2;
  commonDifference = v3;
  result.textContent = '';
});

commonDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Sum of nth Term';
  variable2.textContent = 'First Term in the Series';
  variable3.textContent = '(n) Total Number of Terms';
  sumofnthTerm = v1;
  firstTermintheSeries = v2;
  totalNumberofTerms = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sumofnthTermRadio.checked)
    result.textContent = `Sum of nth Term = ${computeSumofnthTerm().toFixed(2)}`;

  else if(firstTermintheSeriesRadio.checked)
    result.textContent = `First Term in the Series = ${computeFirstTermintheSeries().toFixed(2)}`;

  else if(totalNumberofTermsRadio.checked)
    result.textContent = `Total Number of Terms = ${computeTotalNumberofTerms().toFixed(2)}`;

  else if(commonDifferenceRadio.checked)
    result.textContent = `Common Difference = ${computeCommonDifference().toFixed(2)}`;
})

// calculation

function computeSumofnthTerm() {
  return (Number(totalNumberofTerms.value)) / 2 * (Number(firstTermintheSeries.value) + (Number(commonDifference.value) + Number(firstTermintheSeries.value)));
}

function computeFirstTermintheSeries() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeTotalNumberofTerms() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeCommonDifference() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}