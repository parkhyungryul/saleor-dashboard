import {
  WebhookListUrlQueryParams,
  WebhookListUrlSortField
} from "@saleor/webhooks/urls";
import {
  WebhooksSortingInput,
  WebhooksSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: WebhookListUrlSortField
): WebhooksSortField {
  switch (sort) {
    case WebhookListUrlSortField.name:
      return WebhooksSortField.NAME;
    case WebhookListUrlSortField.serviceAccount:
      return WebhooksSortField.SERVICE_ACCOUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: WebhookListUrlQueryParams
): WebhooksSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
