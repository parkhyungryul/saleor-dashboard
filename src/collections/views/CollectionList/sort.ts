import {
  CollectionListUrlQueryParams,
  CollectionListUrlSortField
} from "@saleor/collections/urls";
import {
  CollectionSortingInput,
  CollectionSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: CollectionListUrlSortField
): CollectionSortField {
  switch (sort) {
    case CollectionListUrlSortField.name:
      return CollectionSortField.NAME;
    case CollectionListUrlSortField.available:
      return CollectionSortField.AVAILABILITY;
    case CollectionListUrlSortField.productCount:
      return CollectionSortField.PRODUCT_COUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: CollectionListUrlQueryParams
): CollectionSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
