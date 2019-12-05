import {
  MenuListUrlQueryParams,
  MenuListUrlSortField
} from "@saleor/navigation/urls";
import { MenuSortingInput, MenuSortField } from "@saleor/types/globalTypes";
import { getOrderDirection } from "@saleor/utils/sort";

export function getSortQueryField(sort: MenuListUrlSortField): MenuSortField {
  switch (sort) {
    case MenuListUrlSortField.name:
      return MenuSortField.NAME;
    case MenuListUrlSortField.items:
      return MenuSortField.ITEMS_COUNT;
    default:
      return undefined;
  }
}

export function getSortQueryVariables(
  params: MenuListUrlQueryParams
): MenuSortingInput {
  return {
    direction: getOrderDirection(params.asc),
    field: getSortQueryField(params.sort)
  };
}
