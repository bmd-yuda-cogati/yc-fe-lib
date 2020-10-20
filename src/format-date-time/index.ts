import moment from "moment";
import "moment-timezone";

export const language = "id";

export const Timezone = () => moment.tz.guess();

export const Location = (zone: string) => {
  let loc = "";
  if (zone === "Asia/Jakarta") {
    loc = "WIB";
  }

  if (zone === "Asia/Jayapura") {
    loc = "WIT";
  }

  if (zone === "Asia/Makassar") {
    loc = "WITA";
  }

  return loc;
};

export const FormatDate = (
  dateUTC: string,
  formatDate: string = "DD MMM YYYY"
) => {
  if (!dateUTC) return "";
  return moment
    .tz(dateUTC, Timezone())
    .locale(language)
    .format(formatDate);
};

export const FormatTime = (dateUTC: string, formatTime: string = "HH:mm") => {
  if (!dateUTC) return "";
  return moment
    .tz(dateUTC, Timezone())
    .locale(language)
    .format(formatTime);
};

export const FormatDateTime = (
  dateUTC: string,
  formatDateTime: string = "DD MMM YYYY, HH:mm"
) => {
  if (!dateUTC) return "";
  return moment
    .tz(dateUTC, Timezone())
    .locale(language)
    .format(formatDateTime);
};

export const FormatDateTimeLoc = (
  dateUTC: string,
  formatDateTime: string = "DD MMM YYYY, HH:mm"
) => {
  if (!dateUTC) return "";
  const loc = Location(Timezone());
  return (
    moment
      .tz(dateUTC, Timezone())
      .locale(language)
      .format(formatDateTime) +
    " " +
    loc
  );
};
