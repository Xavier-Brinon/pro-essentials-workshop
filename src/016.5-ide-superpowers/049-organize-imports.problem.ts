import {
	DEFAULT_COLOR,
	DEFAULT_FILTER,
	DEFAULT_PAGE,
	DEFAULT_SORT,
	DEFAULT_USERNAME,
	FILTER_OPTIONS,
	MAX_PAGE,
} from "./dummy-import-2";

const handlePage = (page: number) => {
	if (page > MAX_PAGE) {
		console.log("Page is too large!");
	}
};
