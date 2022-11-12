import winc from "."

const testData = [
  [
    winc("tag bg-primary", [true, "text-white", "text-primary bg-opacity-30"]),
    "tag bg-primary text-white"
  ]
];

const test = () => {
  testData.forEach(([entry, result], i) => {
    console.log(`Case ${i}: ${entry === result}`)
  })
}




test()