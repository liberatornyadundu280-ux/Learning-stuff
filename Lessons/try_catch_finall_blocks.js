function processInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string.");
  }

  return input.toUpperCase();
}

try {
  console.log("Starting to process input...");
  const result = processInput(9);
  console.log("Processed result:", result);
} catch (error) {
  console.error("Error occurred:", error.message);
}

try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that runs regardless of whether an error occurred or not
}

// using the throws  concept which throws when error is found "displays"
