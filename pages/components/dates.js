import { parseISO, format } from "date-fns";
//parseISO now validates separate date and time values in ISO-8601 strings and returns Invalid Date if the date is invalid.

export default function Date({ dateString }) {
  return <div>date</div>;

  // return <time dateTime={dateString}>{format(date, "LLLL d yyyy")}</time>;
}
