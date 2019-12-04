import {
  ProductTypeListUrlQueryParams,
  ProductTypeListUrlSortField
} from "@saleor/productTypes/urls";
import {
  ProductTypeSortingInput,
  ProductTypeSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: ProductTypeListUrlSortField
): ProductTypeSortField {
  switch (sort) {
    case ProductTypeListUrlSortField.name:
      return ProductTypeSortField.NAME;
    case ProductTypeListUrlSortField.digital:
      return ProductTypeSortField.DIGITAL;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: ProductTypeListUrlQueryParams
): ProductTypeSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
