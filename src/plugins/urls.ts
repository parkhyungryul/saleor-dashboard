import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import { Dialog, Pagination, SingleAction } from "../types";

export const pluginSection = "/plugins/";

export const pluginListPath = pluginSection;
export type PluginListUrlQueryParams = Pagination & SingleAction;
export const pluginListUrl = (params?: PluginListUrlQueryParams) =>
  pluginListPath + "?" + stringifyQs(params);

export const pluginPath = (id: string) => urlJoin(pluginSection, id);
export type PluginUrlDialog = "clear" | "edit";
export type PluginUrlQueryParams = Dialog<PluginUrlDialog> & {
  field?: string;
};
export const pluginsUrl = (id: string, params?: PluginUrlQueryParams) =>
  pluginPath(encodeURIComponent(id)) + "?" + stringifyQs(params);
