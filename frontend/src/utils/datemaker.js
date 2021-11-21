import moment from "moment";

const datemaker = (value) => moment(value).format("YYYY-MM-DD");

export default datemaker;
