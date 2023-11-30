export function validateStringInput(string, type) {
  const stringType = type === "title" ? 3 : 4;
  const regEx =
    /<[^>]*>|&[^;]+;|<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const hasNonWhitespaceCharacters = /\S/.test(string);
  if (
    string.length >= stringType &&
    typeof string === "string" &&
    hasNonWhitespaceCharacters
  ) {
    if (regEx.test(string)) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

export function validateAmountInput(string) {
  if (typeof string !== "string" && string) {
    return false;
  }
  let amount = string.replace(",", ".");
  if (!isNaN(amount)) {
    amount = parseFloat(amount).toFixed(2);
    if (amount >= 0.01 && amount <= 2147483648.0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
