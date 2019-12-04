import {
  AttributeListUrlQueryParams,
  AttributeListUrlSortField
} from "@saleor/attributes/urls";
import {
  AttributeSortingInput,
  AttributeSortField
} from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(
  sort: AttributeListUrlSortField
): AttributeSortField {
  switch (sort) {
    case AttributeListUrlSortField.name:
      return AttributeSortField.NAME;
    case AttributeListUrlSortField.slug:
      return AttributeSortField.SLUG;
    case AttributeListUrlSortField.searchable:
      return AttributeSortField.FILTERABLE_IN_DASHBOARD;
    case AttributeListUrlSortField.useInFacetedSearch:
      return AttributeSortField.FILTERABLE_IN_STOREFRONT;
    case AttributeListUrlSortField.visible:
      return AttributeSortField.VISIBLE_IN_STOREFRONT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: AttributeListUrlQueryParams
): AttributeSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
