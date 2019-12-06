import { stringify as stringifyQs } from "qs";
import urlJoin from "url-join";

import {
  ActiveTab,
  Dialog,
  Filters,
  Pagination,
  SingleAction,
  TabActionDialog
} from "../types";

export const webhookSection = "/webhooks/";

export const webhookListPath = webhookSection;
export enum WebhookListUrlFiltersEnum {
  query = "query"
}
export type WebhookListUrlFilters = Filters<WebhookListUrlFiltersEnum>;
export type WebhookListUrlDialog = "remove" | TabActionDialog;
export type WebhookListUrlQueryParams = ActiveTab &
  WebhookListUrlFilters &
  Dialog<WebhookListUrlDialog> &
  Pagination &
  SingleAction;
export const webhookListUrl = (params?: WebhookListUrlQueryParams) =>
  webhookListPath + "?" + stringifyQs(params);

export const webhookPath = (id: string) => urlJoin(webhookSection, id);
export type WebhookUrlDialog = "remove";
export type WebhookUrlQueryParams = Dialog<WebhookUrlDialog> & SingleAction;
export const webhookUrl = (id: string, params?: WebhookUrlQueryParams) =>
  webhookPath(encodeURIComponent(id)) + "?" + stringifyQs(params);

export const webhookAddPath = urlJoin(webhookSection, "add");
export const webhookAddUrl = webhookAddPath;
