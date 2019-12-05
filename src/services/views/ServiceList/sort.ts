import {
  ServiceListUrlQueryParams,
  ServiceListUrlSortField
} from "@saleor/services/urls";
import {
  ServiceAccountSortingInput,
  ServiceAccountSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: ServiceListUrlSortField
): ServiceAccountSortField {
  switch (sort) {
    case ServiceListUrlSortField.name:
      return ServiceAccountSortField.NAME;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: ServiceListUrlQueryParams
): ServiceAccountSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
