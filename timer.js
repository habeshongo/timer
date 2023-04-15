const beepTimes = process.argv.slice(2);

/* If no numbers are provided, the program should just not beep at all and end immediately since no beeps should get scheduled.*/
if (beepTimes === 0) {
  process.exit();
}

beepTimes.forEach((beepTime, index) => {
  /*Converts the string form of the number to an integer form. */
  const seconds = parseInt(beepTime);

  /* If the seconds variable cannot be parsed as a valid number, isNaN(seconds) will return true and the code block will be executed. */
  if (isNaN(seconds)) {
    return;
  }

  if (seconds > 0) {
    /* setTimeout(()=>{}, delay time in milliseconds) */
    setTimeout(() => {
      console.log(`Alarm ${index + 1} is going off!`);
      process.stdout.write("\x07"); // Beep sound
    }, seconds * 1000);
  }
});
