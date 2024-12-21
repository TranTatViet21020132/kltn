import moment from "moment";

export const BASE_API_URL: string =
  import.meta.env.VITE_PUBLIC_BASE_API_URL ?? window.location.origin;

export const DEFAULT_PAGE_SIZE_OPTION = [10, 20, 30];

/**
 * Date-time constants
 */
export const STANDARD_DATE_REGEX = /^[0-9]{4}-[0-9]{2}-[0-9]{2}?$/;
export const STANDARD_TIME_REGEX = /^[0-9]{2}:[0-9]{2}?$/;
export const STANDARD_DATE_TIME_REGEX_WITHOUT_TIMEZONE =
  /^[0-9]{4}-[0-9]{2}-[0-9]{2}[\sT][0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?$/;
export const STANDARD_DATE_TIME_REGEX =
  /^([0-9]{4}-[0-9]{2}-[0-9]{2})[\sT]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?)(Z|[+-][0-9]{2}:[0-9]{2})?$/;
export const STANDARD_DATE_FORMAT = "YYYY-MM-DD";
export const STANDARD_DATE_FORMAT_INVERSE = "DD-MM-YYYY";
export const STANDARD_TIME_FORMAT = "HH:mm:ss";
export const STANDARD_TIME_MINUTES_FORMAT = "HH:mm";
export const DEFAULT_DATETIME_VALUE = "0001-01-01T00:00:00.000Z";
export const STANDARD_DATE_TIME_FORMAT = `${STANDARD_DATE_FORMAT}${
  "T" + STANDARD_TIME_FORMAT + "Z"
}`;

export const STANDARD_DATE_TIME_FORMAT_VIEW = `${STANDARD_DATE_FORMAT_INVERSE} ${STANDARD_TIME_FORMAT}`;
export const STANDARD_DATE_TIME_MINUTES_FORMAT = `${STANDARD_DATE_FORMAT_INVERSE} ${STANDARD_TIME_MINUTES_FORMAT}`;
export const TIMEZONE_OFFSET = moment().format("Z");

/**
 * Debounce time constants
 */
export const DEBOUNCE_TIME_100 = 100;

export const DEBOUNCE_TIME_150 = 150;

export const DEBOUNCE_TIME_200 = 200;

export const DEBOUNCE_TIME_250 = 250;

export const DEBOUNCE_TIME_300 = 300;

export const DEBOUNCE_TIME_350 = 350;

export const DEBOUNCE_TIME_400 = 400;

export const INPUT_DEBOUNCE_TIME = 400;

/**
 * limit constants
 */
export const DEFAULT_LIMIT_WORD = 50;
export const NOTIFICATION_LIMIT_WORD = 75;

/**
 * Filter constants
 */
export const DEFAULT_TAKE = 10;

export const SPECIAL_CHARACTERS =
  /[ `!@#$%^&*()_+\-=[\]{};':"|,.<>/?~ẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]/;

/**
 * url constants
 */

export const ACTION_URL_REGEX = /^(\/?rpc)/;

/**
 * route constants
 */
export const ROOT_ROUTE = import.meta.env.VITE_PUBLIC_URL;
export const LOGOUT_ROUTE = "/logout";
export const FORBIDENT_ROUTE = "/403";
export const NOT_FOUND_ROUTE = "/404";
// export const ASSETS_IMAGE: string = PUBLIC_URL
//   ? PUBLIC_URL + "/assets/img"
//   : "/assets/img";
