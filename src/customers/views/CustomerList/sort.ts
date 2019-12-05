import {
  CustomerListUrlQueryParams,
  CustomerListUrlSortField
} from "@saleor/customers/urls";
import { UserSortingInput, UserSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: CustomerListUrlSortField
): UserSortField {
  switch (sort) {
    case CustomerListUrlSortField.email:
      return UserSortField.EMAIL;
    case CustomerListUrlSortField.name:
      return UserSortField.LAST_NAME;
    case CustomerListUrlSortField.orders:
      return UserSortField.ORDER_COUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: CustomerListUrlQueryParams
): UserSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
