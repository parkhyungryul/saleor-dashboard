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
    case ProductTypeListUrlSortField.slug:
      return ProductTypeSortField.SLUG;
    case ProductTypeListUrlSortField.searchable:
      return ProductTypeSortField.FILTERABLE_IN_DASHBOARD;
    case ProductTypeListUrlSortField.useInFacetedSearch:
      return ProductTypeSortField.FILTERABLE_IN_STOREFRONT;
    case ProductTypeListUrlSortField.visible:
      return ProductTypeSortField.VISIBLE_IN_STOREFRONT;
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
