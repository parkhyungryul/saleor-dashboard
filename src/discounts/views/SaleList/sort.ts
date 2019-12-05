import {
  SaleListUrlQueryParams,
  SaleListUrlSortField
} from "@saleor/discounts/urls";
import { SaleSortingInput, SaleSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(sort: SaleListUrlSortField): SaleSortField {
  switch (sort) {
    case SaleListUrlSortField.name:
      return SaleSortField.NAME;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: SaleListUrlQueryParams
): SaleSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
