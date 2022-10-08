export const colors = [
  {
    code: "red",
  },
  {
    code: "green",
  },
  {
    code: "pink",
  },

  {
    code: "blue",
  },
  {
    code: "black",
  },
  {
    code: "purple",
  },
  {
    code: "gray",
  },
  {
    code: "brown",
  },
  {
    code: "orange",
  },
];


export const getMyValue = (val) => {
  let finalVal = "-"
  if(val?.length > 0){
    finalVal = val
  }
  return finalVal
}