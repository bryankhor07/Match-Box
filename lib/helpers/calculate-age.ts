/**
 * Calculates the age of a user given their birthdate.
 *
 * @param birthdate - The user's birthdate as a string (ISO format recommended: "YYYY-MM-DD").
 * @returns The age in years as a number.
 *
 * How it works:
 *  - Gets today's date.
 *  - Subtracts the birth year from the current year.
 *  - Adjusts the result if the user's birthday hasn't occurred yet this year.
 *
 * Notes for future use:
 *  - Assumes input `birthdate` is a valid date string.
 *  - If you ever add support for timezones, consider normalizing dates
 *    to avoid off-by-one errors caused by local time differences.
 *  - If you need exact age (years, months, days), expand logic beyond just years.
 */
export const calculateAge = (birthdate: string): number => {
  const today = new Date();
  const birthDate = new Date(birthdate);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // If birthday hasn't happened yet this year, subtract one year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
