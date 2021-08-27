export {
	findIndex,
	flatten,
	forceArray
} from './array';

export {
	AGGREGATION_COUNT,
	AGGREGATION_DATE_HISTOGRAM,
	AGGREGATION_DATE_RANGE,
	AGGREGATION_GEO_DISTANCE,
	AGGREGATION_MAX,
	AGGREGATION_MIN,
	AGGREGATION_RANGE,
	AGGREGATION_STATS,
	AGGREGATION_TERMS,
	FILTER_CLAUSE_MUST,
	FILTER_CLAUSE_MUST_NOT,
	FILTER_CLAUSE_SHOULD,
	FILTER_CLAUSES,
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL,
	INDEX_CONFIG_TEMPLATES,
	QUERY_FUNCTION_FULLTEXT,
	QUERY_FUNCTION_NGRAM,
	QUERY_FUNCTION_PATH_MATCH,
	QUERY_FUNCTION_RANGE,
	QUERY_FUNCTION_STEMMED,
	QUERY_OPERATOR_AND,
	QUERY_OPERATOR_OR,
	STEMMING_LANGUAGES,
	VALUE_TYPE_ANY,
	VALUE_TYPE_BOOLEAN,
	VALUE_TYPE_DOUBLE,
	VALUE_TYPE_GEO_POINT,
	VALUE_TYPE_INSTANT,
	VALUE_TYPE_LOCAL_DATE,
	VALUE_TYPE_LOCAL_DATE_TIME,
	VALUE_TYPE_LOCAL_TIME,
	VALUE_TYPE_LONG,
	VALUE_TYPE_REFERENCE,
	VALUE_TYPE_SET,
	VALUE_TYPE_STRING,
	addQueryFilter,
	dirname,
	enonify,
	fulltext,
	indexTemplateToConfig,
	join,
	ngram,
	updateIndexConfigs
} from './storage';

export {
	camelize,
	lpad,
	rpad,
	ucFirst,
	unStem
} from './string';

export {
	TASK_STATE_FAILED,
	TASK_STATE_FINISHED,
	TASK_STATE_RUNNING,
	TASK_STATE_WAITING
} from './task';

export {
	isDate,
	isFunction,
	isInt,
	isNotSet,
	isObject,
	isSet,
	isString,
	toStr
} from './value';

export const COLON_SIGN = ':'; // Not good in repo names
export const DOT_SIGN = '.';
export const ELLIPSIS = '…';

export const RESPONSE_TYPE_JSON = 'text/json;charset=utf-8';
export const RESPONSE_TYPE_HTML = 'text/html;charset=utf-8';
