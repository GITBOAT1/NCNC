export const getFullYear = () => {
    return new Date().getFullYear();
  }

export const getFooterCopy = (isIndex) => {
    if (isIndex) {
      return ("NOBLE CONTRIBUTION(NCNC)");
    }
    else {
      return("NOBLE CONTRIBUTION");
    }
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}