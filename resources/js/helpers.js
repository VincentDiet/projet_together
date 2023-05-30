import moment from "moment";
import "moment/dist/locale/fr";

export const getFormatedDate = (date, format) => {
    const date_ = moment(date);
    date_.locale("fr");
    return date_.format(format);
};
