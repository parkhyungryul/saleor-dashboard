import {
  WebhookListUrlQueryParams,
  WebhookListUrlSortField
} from "@saleor/webhooks/urls";
import {
  WebhookSortingInput,
  WebhookSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: WebhookListUrlSortField
): WebhookSortField {
  switch (sort) {
    case WebhookListUrlSortField.name:
      return WebhookSortField.NAME;
    case WebhookListUrlSortField.serviceAccount:
      return WebhookSortField.SERVICE_ACCOUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: WebhookListUrlQueryParams
): WebhookSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
