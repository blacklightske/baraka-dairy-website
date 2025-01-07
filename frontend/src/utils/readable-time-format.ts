export function readableTimeFormat(timestamp: string): string {
  const currentTime = new Date();
  const pastTime = new Date(timestamp);

  // Ensure the timestamp is valid
  if (isNaN(pastTime.getTime())) {
    throw new Error("Invalid timestamp format");
  }

  const timeDifference = currentTime.getTime() - pastTime.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours >= 24) {
    // Format the date as DD/MM/YYYY
    const day = String(pastTime.getDate()).padStart(2, "0");
    const month = String(pastTime.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = pastTime.getFullYear();
    return `${day}/${month}/${year}`;
  } else if (hours >= 1) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes >= 1) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
}
