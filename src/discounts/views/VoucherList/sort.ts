import {
  VoucherListUrlQueryParams,
  VoucherListUrlSortField
} from "@saleor/discounts/urls";
import {
  VoucherSortingInput,
  VoucherSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: VoucherListUrlSortField
): VoucherSortField {
  switch (sort) {
    case VoucherListUrlSortField.name:
      return VoucherSortField.NAME;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: VoucherListUrlQueryParams
): VoucherSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
