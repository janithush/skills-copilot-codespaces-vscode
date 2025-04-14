function skillsMember() {
  return {
    name: "skills",
    description: "Skills member",
    type: 1,
    options: [
      {
        name: "member",
        description: "The member to get the skills of",
        type: 6,
        required: true,
      },
    ],
  };
}
//     return arr.includes(value);
// }
// function getArrayIndexOf(arr, value) {
//     // This function returns the index of the value in the array