import {
  PageListUrlQueryParams,
  PageListUrlSortField
} from "@saleor/pages/urls";
import { PageSortingInput, PageSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(sort: PageListUrlSortField): PageSortField {
  switch (sort) {
    case PageListUrlSortField.title:
      return PageSortField.TITLE;
    case PageListUrlSortField.visible:
      return PageSortField.VISIBILITY;
    case PageListUrlSortField.slug:
      return PageSortField.SLUG;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: PageListUrlQueryParams
): PageSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
