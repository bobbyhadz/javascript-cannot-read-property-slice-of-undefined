// Cannot read properties of undefined (reading 'slice') in JS

// EXAMPLE 1 - Specify a fallback value if the variable stores `undefined`

// 👇️ using slice() with ARRAYS
const fromDb = undefined;

// ✅ Provide empty array fallback value
const arr = fromDb || [];

// ✅ Using optional chaining
const r1 = arr?.slice(0);

// ✅ Using the ternary operator
const r2 = arr ? arr.slice(0) : [];

// ✅ Using Array.isArray
if (Array.isArray(arr)) {
  const r3 = arr.slice(0);
} else {
  console.log('arr is not an array');
}

// ✅ Provide fallback in place
const r4 = (arr || []).slice(0);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the slice() method with strings

// // 👇️️️ using slice() with STRINGS

// const fromDb = undefined;
// const str = fromDb || '';

// // ✅ Using optional chaining
// const r5 = str?.slice(0);

// // ✅ Using the ternary operator
// const r6 = str ? str.slice(0) : '';

// // ✅ Using the typeof operator
// if (typeof str === 'string') {
//   const r7 = str.slice(0);
// } else {
//   console.log('str is not a string');
// }

// // ✅ Provide fallback in place
// const r8 = (str || '').slice(0);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Checking if the valueis array or string before using slice()

// const fromDb = undefined;

// // ✅ with Arrays

// const arr = fromDb || [];

// if (Array.isArray(arr)) {
//   const r3 = arr.slice(0);
// } else {
//   console.log('arr is not an array');
// }

// // --------------------------------

// // ✅ with Strings

// const str = fromDb || '';

// if (typeof str === 'string') {
//   const r7 = str.slice(0);
// } else {
//   console.log('str is not a string');
// }
